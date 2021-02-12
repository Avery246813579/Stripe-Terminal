import {decode, encode} from 'base-64';

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

class StripeTerminal {
    /**
     * Payment status options for the payment workflow
     *
     * @type {{READY: string, NOT_READY: string, PROCESSING: string, WAITING_FOR_INPUT: string}}
     */
    get PAYMENT_STATUS() {
        return {
            NOT_READY: "not_ready",
            READY: "ready",
            WAITING_FOR_INPUT: "waiting_for_input",
            PROCESSING: "processing"
        }
    }

    /**
     * Connection status options for the terminal
     *
     * @type {{CONNECTING: string, NOT_CONNECTED: string, CONNECTED: string}}
     */
    get CONNECTION_STATUS() {
        return {
            CONNECTING: "connecting",
            CONNECTED: "connected",
            NOT_CONNECTED: "not_connected"
        }
    }

    /**
     * Errors returned by the JavaScript SDK include an error code, as well as a human-readable message.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#errors
     *
     * @return {{CANCELABLE_ALREADY_COMPLETED: string, INVALID_READER_VERSION: string, COMMAND_ALREADY_IN_PROGRESS:
     *     string, ALREADY_CONNECTED: string, NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT: string, NO_ESTABLISHED_CONNECTION:
     *     string, FAILED_FETCH_CONNECTION_TOKEN: string, NO_ACTIVE_COLLECT_PAYMENT_METHOD_ATTEMPT: string,
     *     DISCOVERY_TOO_MANY_READERS: string, READER_ERROR: string, CANCELED: string, NETWORK_ERROR: string,
     *     CANCELABLE_ALREADY_CANCELED: string, NETWORK_TIMEOUT: string}}
     */
    get ERRORS() {
        return {
            NO_ESTABLISHED_CONNECTION: "no_established_connection",
            NO_ACTIVE_COLLECT_PAYMENT_METHOD_ATTEMPT: "no_active_collect_payment_method_attempt",
            NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT: "no_active_read_reusable_card_attempt",
            CANCELED: "canceled",
            CANCELABLE_ALREADY_COMPLETED: "cancelable_already_completed",
            CANCELABLE_ALREADY_CANCELED: "cancelable_already_canceled",
            NETWORK_ERROR: "network_error",
            NETWORK_TIMEOUT: "network_timeout",
            ALREADY_CONNECTED: "already_connected",
            FAILED_FETCH_CONNECTION_TOKEN: "failed_fetch_connection_token",
            DISCOVERY_TOO_MANY_READERS: "discovery_too_many_readers",
            INVALID_READER_VERSION: "invalid_reader_version",
            READER_ERROR: "reader_error",
            COMMAND_ALREADY_IN_PROGRESS: "command_already_in_progress"
        }
    }

    /**
     * Fetches the most recent version of terminal api and stores it in memory.
     *
     * @private
     */
    async _setupLibrary() {
        if (this._StripeTerminal) {
            return this._StripeTerminal;
        }

        if (this._StripeTerminal) {
            return this._StripeTerminal;
        }

        let response = await fetch('https://js.stripe.com/terminal/v1');
        let rawText = await response.text();
        let _ref = null;
        let data = rawText.replace("document.title", "-1")
            .replace("window.location.origin", '"React Native"')
            .replace("window.location.pathname", '""')
            .replace('window.location.protocol.startsWith("https")', "true")
            .replace("var StripeTerminal;StripeTerminal=", "_ref=");

        eval(data);
        this._StripeTerminal = _ref;
        return this._StripeTerminal;
    }

    /**
     * Creates an instance of Stripe Terminal.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#stripeterminal-create
     *
     * @param options.onFetchConnectionToken                An event handler that fetches a connection token from your
     *     backend.
     * @param options.onUnexpectedReaderDisconnect          An event handler called when a reader disconnects from your
     *     app.
     * @param options.onConnectionStatusChange              An event handler called when the SDK’s ConnectionStatus
     *     changes.
     * @param options.onPaymentStatusChange                 An event handler called when the SDK’s PaymentStatus
     *     changes.
     *
     * @return {Promise<void>}
     */
    async setup(options) {
        await this._setupLibrary();

        this.terminalInstance = this._StripeTerminal.create(options);
    }

    /**
     * Begins discovering readers
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#discover-readers
     *
     * @param options.simulated     A boolean value indicating whether to discover a simulated reader. If left empty,
     *     this value defaults to false.
     * @param options.location      Return only readers assigned to the given location. This parameter is ignored when
     *     discovering a simulated reader.
     */
    async discoverReaders(options) {
        return await this.terminalInstance.discoverReaders(options);
    }

    /**
     * Attempts to connect to the given reader.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#connect-reader
     *
     * @param reader                Target reader object
     * @return {Promise<*>}
     */
    async connectReader(reader) {
        return await this.terminalInstance.connectReader(reader);
    }

    /**
     * Begins collecting a payment method for a PaymentIntent.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#collect-payment-method
     *
     * @param client_secret             The client_secret field from a PaymentIntent object created on your backend
     * @return {Promise<void>}
     */
    async collectPaymentMethod(client_secret) {
        return await this.terminalInstance.collectPaymentMethod(client_secret);
    }

    /**
     * Cancels an outstanding collectPaymentMethod command.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#cancel-collect-payment-method
     *
     * @return {Promise<void|*>}        A Promise that resolves to an empty object once the command has been
     *     successfully canceled. If cancelation fails, the Promise resolves to an object with an error
     */
    async cancelCollectPaymentMethod() {
        return await this.terminalInstance.cancelCollectPaymentMethod();
    }

    /**
     * Processes a payment after a payment method has been collected.
     *
     * Reference: Processes a payment after a payment method has been collected.
     *
     * @param paymentIntent             A PaymentIntent object obtained from a successful call to collectPaymentMethod.
     * @return {Promise<void|*>}
     */
    async processPayment(paymentIntent) {
        return await this.terminalInstance.processPayment(paymentIntent);
    }

    /**
     * Returns the current connection status.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#get-connection-status
     *
     * @return {string}        ConnectionStatus can be one of connecting, connected, or not_connected.
     */
    getConnectionStatus() {
        return this.terminalInstance.getConnectionStatus();
    }

    /**
     * Returns the reader’s payment status.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#get-payment-status
     *
     * @return {string}        PaymentStatus can be one of not_ready, ready, waiting_for_input, or processing.
     */
    getPaymentStatus() {
        return this.terminalInstance.getPaymentStatus();
    }

    /**
     * Disconnects from the connected reader.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#disconnect
     */
    disconnectReader() {
        return this.terminalInstance.disconnectReader();
    }

    /**
     * Clears the current ConnectionToken, and any other cached credentials.
     *
     * Use this method to switch accounts in your application (e.g., to switch between live and test Stripe API keys on
     * your backend)
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#disconnect
     */
    clearCachedCredentials() {
        return this.terminalInstance.clearCachedCredentials();
    }

    /**
     * Reads a card for online reuse.
     *
     * Online payments initiated from Terminal do not benefit from the lower pricing and liability shift given to
     * standard Terminal payments. Most integrations do not need to use readReusableCard. To simply collect an
     * in-person payment from a customer, use the standard flow.
     *
     * Note: Currently, you can’t use Stripe Terminal to save contactless cards and mobile wallets (e.g., Apple Pay,
     * Google Pay) for later reuse.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#read-reusable-card
     *
     * @return Promise              Returns a Promise that resolves to an object with the following fields:
     *     payment_method: The PaymentMethod object, if the command succeeded.error: An error, if the command failed.
     */
    readReusableCard() {
        return this.terminalInstance.readReusableCard();
    }

    /**
     * Cancels an outstanding readReusableCard command.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#cancel-read-reusable-card
     *
     * @return Promise              A Promise that resolves to an empty object once the command has been successfully
     *     canceled. If cancellation fails, the Promise resolves to an object with an error.
     */
    cancelReadReusableCard() {
        return this.terminalInstance.cancelReadReusableCard();
    }

    /**
     * Updates the reader display with cart details.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#set-reader-display
     *
     * @param displayInfo               Cart Display INfo https://stripe.com/docs/terminal/checkout/cart-display
     * @return Promise                  a Promise that resolves to an empty object if the command succeeds. If the
     *     command fails, the Promise resolves to an object with an error.
     */
    setReaderDisplay(displayInfo) {
        return this.terminalInstance.setReaderDisplay(displayInfo);
    }

    /**
     * Clears the reader display and resets it to the splash screen.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#clear-reader-display
     */
    clearReaderDisplay() {
        return this.terminalInstance.clearReaderDisplay();
    }

    /**
     * Sets the configuration object for the simulated card reader.
     *
     * This method only takes effect when connected to the simulated reader; it performs no action otherwise.
     *
     * The simulated reader will follow the specified configuration only until processPayment is complete. At that
     * point, the simulated reader will revert to its default behavior.
     *
     * Note that this method overwrites any currently active configuration object; to add specific key-value pairs to
     * the object, make sure to use a combination of this method and getSimulatorConfiguration.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#stripeterminal-setsimulatorconfig
     *
     * @param configuration                         Configuration options for simulator
     * @param configuration.testCardNumber          Configures the simulated reader to use a test card number as the
     *     payment method presented by the user. This can be used to test different scenarios in your integration, such
     *     as payments with different card brands or processing errors like a declined charge.
     * @param configuration.testPaymentMethod       Serves the same purpose as testCardNumber, but relies on test
     *     payment methods instead.
     * @param configuration.payment_method_type     Determine the type of payment method created by the simulated
     *     reader when collectPaymentMethod is called.
     */
    setSimulatorConfiguration(configuration) {
        return this.terminalInstance.setSimulatorConfiguration(configuration);
    }

    /**
     * The Stripe Terminal JavaScript SDK may overwrite this value as necessary, including (but not limited to)
     * resetting the value after processPayment is complete, and removing unknown key-value pairs.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#stripeterminal-getsimulatorconfig
     *
     * @return String                 Returns the currently active configuration object.
     */
    getSimulatorConfiguration() {
        return this.terminalInstance.getSimulatorConfiguration();
    }

    /**
     * Begins collecting a payment method to be refunded
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#stripeterminal-collectrefundpaymentmethod
     *
     * @param charge_id                             The ID of the charge that will be refunded.
     * @param amount                                A number that represents the amount, in cents, that will be
     *     refunded
     *     from the charge. This number must be less than or equal to the amount that was charged in the original
     *     payment..
     * @param currency                              Three-letter ISO code for the currency, in lowercase. Must be a
     *     supported currency.
     * @param options                               An optional object containing additional refund parameters.
     * @param options.refund_application_fee        Boolean indicating whether the application fee should be refunded
     *     when refunding this charge. If a full charge refund is given, the full application fee will be refunded.
     *     Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge
     *     refunded.
     * @param options.reverse_transfer              Boolean indicating whether the transfer should be reversed when
     *     refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the
     *     entire or partial amount).
     * @return Promise                   a Promise that resolves to either: an empty object if the payment method
     *     collection was successful, or an object with an error field if there was an error while collecting the
     *     refund payment method.
     */
    async collectRefundPaymentMethod(charge_id, amount, currency, options) {
        return this.terminalInstance.collectRefundPaymentMethod(charge_id, amount, currency, options);
    }

    /**
     * Processes an in-progress refund. This method can only be successfully called after collectRefundPaymentMethod
     * has returned successfully.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#stripeterminal-processrefund
     *
     * @return Promise                 A Promise that resolves to either: a refund object if the refund was successful,
     *     oran object with an error field if there was an error while processing the refund.
     */
    async processRefund() {
        return this.terminalInstance.processRefund();
    }

    /**
     * Cancels an outstanding collectRefundPaymentMethod command.
     *
     * Reference: https://stripe.com/docs/terminal/js-api-reference#stripeterminal-cancelcollectrefundpaymentmethod
     *
     * @return Promise                 A Promise that resolves to an empty object if the cancellation was successful.
     *     If the cancellation fails, the Promise resolves to an object with an error field.
     */
    async cancelCollectRefundPaymentMethod() {
        return this.terminalInstance.cancelCollectRefundPaymentMethod();
    }
}

let _StripeTerminal = new StripeTerminal();
export default _StripeTerminal;
