// Merklebase SDK
import axios from "axios";
import { Accounts } from "./accounts";
import { Links, LinksGenerate, LinksKeys } from "./links";
import { Balances } from "./balances";
import { EntitiesParams, Entities } from "./entities";
import { Markets } from "./markets";
import { Tokens } from "./tokens";
import { Common } from "./common";

interface Merklebase {
  accounts: Accounts;
  links: Links;
  balances: Balances;
  entities: Entities;
  markets: Markets;
  tokens: Tokens;
  common: Common;
}

const merklebaseUrl = "https://api.merklebase.io";

class MerklebaseAPI implements Merklebase {
  ApiKey: string;
  baseUrl: string;
  constructor(ApiKey: string, url: string = merklebaseUrl) {
    console.log("Merklebase SDK initialized");
    this.ApiKey = ApiKey;
    this.baseUrl = url;
  }

  accounts: Accounts = {
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

  links: Links = {
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

  balances: Balances = {
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

  entities: Entities = {
    get: async (userToken: string) => {
      const response = await axios.get(`${this.baseUrl}/entities/get`, {
        headers: {
          authorization: this.ApiKey,
          token: userToken,
        },
      });
      return response.data;
    },
    create: async (userToken: string, entity: EntitiesParams) => {
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
      entity: EntitiesParams
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

  markets: Markets = {
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

  tokens: Tokens = {
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

  common: Common = {
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

export default { MerklebaseAPI };
