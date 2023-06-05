"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createLink_js_1 = require("./createLink.js");
class MerklebaseUI {
    constructor(apiKey, url) {
        this.links = {
            connect: (callback) => {
                (0, createLink_js_1.initCreateLinkComponent)({ callback, apiKey: this.apiKey, url: this.url });
            },
        };
        this.apiKey = apiKey;
        this.url = url;
    }
}
exports.default = MerklebaseUI;
