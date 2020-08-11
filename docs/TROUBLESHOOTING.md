# Troubleshooting
This file contains a few things I encountered while setting up my Stripe Terminal integrations.

## onUnexpectedReaderDisconnect taking a while to be called
This is something with Stripe Terminal internally and how the interval they use to poll. There is no way to change the
polling frequency, but the best way around it is checking for the "no_established_connection" error code when calling
a function. 

## No Devices Found
I had a problem that I was getting an empty array of devices even though I registered my reader. The reason was is that 
I was getting my connection token from my main Stripe account instead of the targeted connect account.