"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Merklebase SDK
const axios_1 = require("axios");
const merklebaseUrl = "https://api.merklebase.io";
class MerklebaseAPI {
    constructor(ApiKey, url = merklebaseUrl) {
        this.accounts = {
            get: (userToken) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/accounts`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                });
                return response.data;
            }),
        };
        this.links = {
            get: (userToken) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/links/get`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                });
                return response.data;
            }),
            connect: (userToken, linkKeys) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/links/connect`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                    data: linkKeys,
                });
                return response.data;
            }),
            disconnect: (userToken, linkId) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/links/disconnect`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                    data: {
                        link_id: linkId,
                    },
                });
                return response.data;
            }),
            refresh: (userToken, linkId) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/links/refresh`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                    data: {
                        link_id: linkId,
                    },
                });
                return response.data;
            }),
            generate: {
                ed25519: () => __awaiter(this, void 0, void 0, function* () {
                    const response = yield axios_1.default.post(`${this.baseUrl}/links/generate/ed25519`, {
                        headers: {
                            authorization: this.ApiKey,
                        },
                    });
                    return response.data;
                }),
                rsacsr: () => __awaiter(this, void 0, void 0, function* () {
                    const response = yield axios_1.default.post(`${this.baseUrl}/links/generate/rsacsr`, {
                        headers: {
                            authorization: this.ApiKey,
                        },
                    });
                    return response.data;
                }),
            },
        };
        this.balances = {
            get: (userToken) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/balances`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                });
                return response.data;
            }),
        };
        this.entities = {
            get: (userToken) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/entities/get`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                });
                return response.data;
            }),
            create: (userToken, entity) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/entities/create`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                    data: entity,
                });
                return response.data;
            }),
            update: (userToken, entityId, entity) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/entities/update`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                    data: Object.assign({ entity_id: entityId }, entity),
                });
                return response.data;
            }),
            remove: (userToken, entityId) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/entities/remove`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                    data: {
                        entity_id: entityId,
                    },
                });
                return response.data;
            }),
        };
        this.markets = {
            prices: (userToken) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/markets/prices`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                });
                return response.data;
            }),
        };
        this.tokens = {
            create: (userToken) => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.post(`${this.baseUrl}/tokens/create`, {
                    headers: {
                        authorization: this.ApiKey,
                        token: userToken,
                    },
                });
                return response.data;
            }),
        };
        this.common = {
            supportedCurrencies: () => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/common/supportedCurrencies`, {
                    headers: {
                        authorization: this.ApiKey,
                    },
                });
                return response.data;
            }),
            supportedProviders: () => __awaiter(this, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${this.baseUrl}/common/supportedProviders`, {
                    headers: {
                        authorization: this.ApiKey,
                    },
                });
                return response.data;
            }),
        };
        console.log("Merklebase SDK initialized");
        this.ApiKey = ApiKey;
        this.baseUrl = url;
    }
}
exports.default = MerklebaseAPI;
