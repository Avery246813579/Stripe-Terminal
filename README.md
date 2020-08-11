# Stripe Terminal
[![npm version](https://badge.fury.io/js/stripe-terminal.svg)](https://badge.fury.io/js/stripe-terminal)

A project that will allow you to use the Stripe JS Terminal integration using javascript's importing/requiring instead 
of using a script in your header. This was specifically created for use in code bases that don't allow static script 
importing (ex. React, React Native).

This package gets the Stripe Terminal code from the static hosting at https://js.stripe.com/terminal/v1 and converts it 
to local code (like using a script tag on the web does). We rebuild the module the first time we access it each run (
when a website is loaded or app is opened) to comply with Stripe's guidelines. 

# Documentation
- [Stripe Api Reference](https://stripe.com/docs/terminal/js-api-reference) 
- [Stripe Setup Guide](https://stripe.com/docs/terminal/readers/connecting/verifone-p400)
- [Stripe Payment Guide](https://stripe.com/docs/terminal/payments)
- [Avery's Simple How-To's](docs/HOW_TOs.md)
    - [Adding tips to your workflow](docs/HOW_TOs.md#tips)
- [Avery's Troubleshooting](docs/TROUBLESHOOTING.md)

# Installation
    npm i stripe-terminal --save
    or
    yarn add stripe-terminal

# Usage
The package needs to be configured to your stripe account using. Use the setup function to setup your token integration
and other available callbacks.

    import StripeTerminal from "stripe-terminal"
    await StripeTerminal.setup({
        onFetchConnectionToken: this.fetchToken.bind(this), // Required
        onUnexpectedReaderDisconnect: this.readerDisconnect.bind(this),
    });
    
## Discover Readers
Discover readers connected to your stripe account.

```javascript
let {discoveredReaders} = await StripeTerminal.discoverReaders({simulated: false});
```

| Option              | Default            | Description                                                                           |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `simulated`         | false              | A boolean value indicating whether to discover a simulated reader.                    |
| `location`          | undefined          | Return only readers assigned to the given location                                    |
    
## Connect Reader
Discover readers connected to your stripe account.

```javascript
let device = await StripeTerminal.connectReader(discoveredReaders[0]);
```

| Option              | Default            | Description                                                                           |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `reader   `         | undefined          | The target reader you got from the discover call                                      |
    
## Create Payment Intent
The first thing needed is create a payment intent. The only way you can do this is 
[by creating it on the server](https://stripe.com/docs/terminal/payments#create). 

## Collect Payment
Collect the payment intent using the secret from creating the payment intent

```javascript
let {paymentIntent} = await StripeTerminal.collectPaymentMethod(clientSecret);
```

| Option              | Default            | Description                                                                           |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `client_secret`     | undefined          | The client_secret field from a PaymentIntent object created on your backend           |

## Process Payment
Process a payment after collecting the payment method.

```javascript
let paymentResponse = await StripeTerminal.processPayment(paymentIntent);
```

| Option              | Default            | Description                                                                           |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `paymentIntent`     | undefined          | A PaymentIntent object obtained from a successful call to collectPaymentMethod.       |

# Other Methods
Here are the other methods that you can call.

## Get Connection Status
Payment status options for the payment workflow.

```javascript
let status = StripeTerminal.getConnectionStatus();
if (status === StripeTerminal.CONNECTION_STATUS.PROCESSING) {
    // do something
} 
```

## Get Payment Status
Connection status options for the terminal.

```javascript
let status = StripeTerminal.getPaymentStatus();
if (status === StripeTerminal.PAYMENT_STATUS.PROCESSING) {
    // do something
} 
```

## Cancel Collect Payment 
Cancels an outstanding collectPaymentMethod command.

```javascript
StripeTerminal.cancelCollectPaymentMethod();
```

## Disconnect Reader 
Disconnects from the connected reader.

```javascript
StripeTerminal.disconnectReader();
```

## Clear Cashed Credentials 
Clears the current ConnectionToken, and any other cached credentials.

Use this method to switch accounts in your application (e.g., to switch between live and test Stripe API keys on your 
backend). To switch accounts, follow these steps:

```javascript
StripeTerminal.clearCachedCredentials();
```

## Clear Reader Display 
Clears the reader display and resets it to the splash screen.

```javascript
StripeTerminal.clearReaderDisplay();
```

## Clear Reader Display 
Updates the reader display with [cart details](https://stripe.com/docs/terminal/checkout/cart-display).

```javascript
StripeTerminal.setReaderDisplay(displayInfo);
```

## Creating Refunds 
Begins collecting a payment method to be refunded.

Check about how to use this method here https://stripe.com/docs/terminal/js-api-reference#stripeterminal-collectrefundpaymentmethod

```javascript
StripeTerminal.collectRefundPaymentMethod(charge_id, amount, currency, options);
```

To process the refund:

```javascript
StripeTerminal.processRefund();
```

If you need to cancel the refund:

```javascript
StripeTerminal.cancelCollectRefundPaymentMethod();
```

## Reads reusable card 
Reads a card for online reuse.

```javascript
StripeTerminal.readReusableCard();
```

## Cancels reusable card 
Reads a card for online reuse.

```javascript
StripeTerminal.cancelReadReusableCard();
```

## Set Simulator Configuration 
Sets the configuration object for the simulated card reader.

Check the reference for each parameter at Stripe https://stripe.com/docs/terminal/js-api-reference#stripeterminal-setsimulatorconfig

```javascript
StripeTerminal.setSimulatorConfiguration({testCardNumber: "4242424242424242", testPaymentMethod: "visa"});
```

# Todo
- Think about switching to exports instead of class based
- Maybe reject promise instead of returning error
- Add in some better examples
- Add in tests