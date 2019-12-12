require("mocha");
const assert = require("assert");
const pick = require("./index");

const data = {
    invoice: {
        subTotal: 10.50,
        hst: 1.58,
        total: 12.08
    },
    colour: "Standard Charcoal",
    deleted: false,
    items: [{
        name: "Starter",
        quantity: 1,
        price: 5.25
    }, {
        name: "Capping",
        quantity: 1,
        price: 5.25
    }]
};

describe(".pick()", function () {

    it("should be the same", function () {

        assert.deepEqual(
            pick(data, ["invoice.total", "colour"]), {
                invoice: {
                    total: 12.08
                },
                colour: "Standard Charcoal"
            }
        );

    });


    it("should skip not found values", function () {

        assert.deepEqual(pick(data, ["invoice.subTotal", "invoice.fake", "fake", "not-valid", "not.valid"]), {
            invoice: {
                subTotal: 10.50
            }
        });
    });

    it("should include arrays", function () {

        assert.deepEqual(
            pick(data, ["invoice.total", "colour", "items"]), {
                invoice: {
                    total: 12.08
                },
                colour: "Standard Charcoal",
                items: [{
                    name: "Starter",
                    quantity: 1,
                    price: 5.25
                }, {
                    name: "Capping",
                    quantity: 1,
                    price: 5.25
                }]
            }
        );

    });
});