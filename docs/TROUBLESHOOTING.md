# Troubleshooting
This file contains a few things I encountered while setting up my Stripe Terminal integrations.

## No Devices Found
I had a problem that I was getting an empty array of devices even though I registered my reader. The reason was is 
because I was getting my connection token from my main Stripe account instead of the targeted connect account.
