const has = require("has-value");
const set = require("set-value");
const get = require("get-value");
const isObject = require("isobject");

function objectPick(data, keys) {

    // check if the input value is a valid object
    if (!isObject(data) && typeof data !== "function") {
        return {};
    }

    const res = {};

    // if the input is a single value
    if (typeof keys === "string") {
        if (has(data, keys)) {
            set(res, keys, get(data, keys));
        }
    }

    for (const key of keys) {

        if (has(data, key)) {
            set(res, key, get(data, key));
        }
    }

    return res;
}

module.exports = objectPick;