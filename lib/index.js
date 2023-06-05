"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerklebaseUI = exports.MerklebaseAPI = void 0;
const merklebaseAPI_1 = require("./merklebaseAPI");
exports.MerklebaseAPI = merklebaseAPI_1.default;
const merklebaseUI_1 = require("./merklebaseUI");
exports.MerklebaseUI = merklebaseUI_1.default;
exports.default = { MerklebaseAPI: merklebaseAPI_1.default, MerklebaseUI: merklebaseUI_1.default };
