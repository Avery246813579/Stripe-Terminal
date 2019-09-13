let request = require("request");

export default async () => {
    return new Promise((resolve) => {
        fetch('https://js.stripe.com/terminal/v1').then(response => response.text()).then((dataStr) => {
            eval(dataStr.replace("document.title", "-1"));

            resolve(StripeTerminal);
        });
    })
};