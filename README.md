# Stripe Terminal
A project that will allow you to use the Javascript terminal integration
using javascript importing/requiring instead of using a script in header.

# About
This package gets the Stripe Terminal code from the static hosting at
https://js.stripe.com/terminal/v1 and converts it to a module for use in
frameworks that don't allow static script importing 
(ex. react, react native). 

We rebuild the module every time we import and create a new version of the
module to comply with Stripe's guidelines.  


# Installation
    npm i stripe-terminal --save

# Usage
Import the module and start the implementation by checking out the 
stripe guide https://stripe.com/docs/terminal/sdk/js.

    import StripeTerminal from "stripe-terminal"
    let Instance = StripeTerminal() // We fetch the script from stripe and convert it to a module
    
# Todo
- Setup alarms that check if the static files changed 
- Add in tests
- Add comments for functions 