var expect = require('chai').expect;

let StripeTerminal = require("../dist");
describe('Stripe-Terminal Tests -> ', function () {
    it("should create info", function () {
        StripeTerminal.default.setup({});
    });
});
