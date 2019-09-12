# Stripe Terminal
A project that will allow you to use the Javascript terminal integration
using javascript importing/requiring instead of using a script in header.

# About
This package gets the Stripe Terminal code from the static hosting at
https://js.stripe.com/terminal/v1 and converts it to a module for use in
frameworks that don't allow static script importing 
(ex. react, react native). 

I am not affiliated with Stripe and there are no promises about this
being up to date with every update Stripe releases. There is a warning
on the website saying "Do not include the script in a bundle or host a 
copy yourself; this could break your integration without warning." but
this is the only way some people can use javascript integration. 

# Installation
    npm i stripe-terminal --save

# Usage
Import the module and start the implementation by checking out the 
stripe guide https://stripe.com/docs/terminal/sdk/js.

    import StripeTerminal from "stripe-terminal"