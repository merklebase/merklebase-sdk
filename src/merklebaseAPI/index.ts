// Merklebase SDK
import axios from "axios";
import { IAccounts } from "./accounts";
import { ILinks } from "./links";
import { IBalances } from "./balances";
import { IEntitiesParams, IEntities } from "./entities";
import { IMarkets } from "./markets";
import { ITokens } from "./tokens";
import { ICommon } from "./common";

interface IMerklebase {
  accounts: IAccounts;
  links: ILinks;
  balances: IBalances;
  entities: IEntities;
  markets: IMarkets;
  tokens: ITokens;
  common: ICommon;
}

const merklebaseUrl = "https://api.merklebase.io";

class MerklebaseAPI implements IMerklebase {
  ApiKey: string;
  baseUrl: string;
  constructor(ApiKey: string, url: string = merklebaseUrl) {
    console.log("Merklebase SDK initialized");
    this.ApiKey = ApiKey;
    this.baseUrl = url;
  }

  accounts: IAccounts = {
    get: async (userToken: string) => {
      const response = await axios.get(`${this.baseUrl}/accounts`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
  };

  links: ILinks = {
    get: async (userToken: string) => {
      const response = await axios.get(`${this.baseUrl}/links/get`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
    connect: async (userToken: string, linkKeys) => {
      const response = await axios.post(`${this.baseUrl}/links/connect`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
        data: linkKeys,
      });
      return response.data;
    },
    disconnect: async (userToken: string, linkId: string) => {
      const response = await axios.post(`${this.baseUrl}/links/disconnect`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
        data: {
          link_id: linkId,
        },
      });
      return response.data;
    },
    refresh: async (userToken: string, linkId: string) => {
      const response = await axios.post(`${this.baseUrl}/links/refresh`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
        data: {
          link_id: linkId,
        },
      });
      return response.data;
    },
    generate: {
      ed25519: async () => {
        const response = await axios.post(
          `${this.baseUrl}/links/generate/ed25519`,
          {
            headers: {
              authorization: this.ApiKey,
            },
          }
        );
        return response.data;
      },
      rsacsr: async () => {
        const response = await axios.post(
          `${this.baseUrl}/links/generate/rsacsr`,
          {
            headers: {
              authorization: this.ApiKey,
            },
          }
        );
        return response.data;
      },
    },
  };

  balances: IBalances = {
    get: async (userToken: string) => {
      const response = await axios.get(`${this.baseUrl}/balances`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
  };

  entities: IEntities = {
    get: async (userToken: string) => {
      const response = await axios.get(`${this.baseUrl}/entities/get`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
    create: async (userToken: string, entity: IEntitiesParams) => {
      const response = await axios.post(`${this.baseUrl}/entities/create`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
        data: entity,
      });
      return response.data;
    },
    update: async (
      userToken: string,
      entityId: string,
      entity: IEntitiesParams
    ) => {
      const response = await axios.post(`${this.baseUrl}/entities/update`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
        data: {
          entity_id: entityId,
          ...entity,
        },
      });
      return response.data;
    },
    remove: async (userToken: string, entityId: string) => {
      const response = await axios.post(`${this.baseUrl}/entities/remove`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
        data: {
          entity_id: entityId,
        },
      });
      return response.data;
    },
  };

  markets: IMarkets = {
    prices: async (userToken: string) => {
      const response = await axios.get(`${this.baseUrl}/markets/prices`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
  };

  tokens: ITokens = {
    create: async (userToken: string) => {
      const response = await axios.post(`${this.baseUrl}/tokens/create`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
  };

  common: ICommon = {
    supportedCurrencies: async () => {
      const response = await axios.get(
        `${this.baseUrl}/common/supportedCurrencies`,
        {
          headers: {
            authorization: this.ApiKey,
          },
        }
      );
      return response.data;
    },
    supportedProviders: async () => {
      const response = await axios.get(
        `${this.baseUrl}/common/supportedProviders`,
        {
          headers: {
            authorization: this.ApiKey,
          },
        }
      );
      return response.data;
    },
  };
}

export default MerklebaseAPI;
