class StripeTerminal {
    PAYMENT_STATUS = {
        NOT_READY: "not_ready",
        READY: "ready",
        WAITING_FOR_INPUT: "waiting_for_input",
        PROCESSING: "processing"
    };

    CONNECTION_STATUS = {
        CONNECTING: "connecting",
        CONNECTED: "connected",
        NOT_CONNECTED: "not_connected"
    };

    async _setupLibrary() {
        if (this._StripeTerminal) {
            return this._StripeTerminal;
        }

        let response = await fetch('https://js.stripe.com/terminal/v1');
        let rawText = await response.text();
        let data = rawText.replace("document.title", "-1").replace("var StripeTerminal", "var StripeTerminalRaw");
        eval(data);

        this._StripeTerminal = StripeTerminalRaw
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

        console.log(this._StripeTerminal);
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
        return await this.terminalInstance.cancelCollectPaymentMethod();
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
        return this.terminalInstance.getConnectionStatus();
    }
}

let _StripeTerminal = new StripeTerminal();
export default _StripeTerminal;