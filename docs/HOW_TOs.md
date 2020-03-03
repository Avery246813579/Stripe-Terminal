# How To's
This file contains some tutorials for things that Stripe doesn't have documentation for. 

## Tips
Follow the following flow to add tips into your integration. 

1. Create a payment intent on the server
1. Collect the payment info and DON'T PROCESS THE PAYMENT YET
1. Get a tip amount from the user and update the payment intent on the server
1. Process the payment
1. Capture the payment on the server