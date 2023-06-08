// Merklebase SDK
import axios from 'axios'
interface IAccounts {
  get: (userToken: string) => Promise<any>
}

interface IBalances {
  get: (userToken: string) => Promise<any>
}

interface ICommon {
  supportedCurrencies: () => Promise<any>
  supportedProviders: () => Promise<any>
}

interface IEntitiesParams {
  name: string
  description: string
  location: string
  accounts: string[]
}

interface IEntities {
  get: (userToken: string) => Promise<any>
  create: (userToken: string, entity: IEntitiesParams) => Promise<any>
  update: (userToken: string, id: string, entity: IEntitiesParams) => Promise<any>
  remove: (userToken: string, id: string) => Promise<any>
}

interface ILinksKeys {
  api_key: string
  api_secret: string
  passphrase: string
}

interface ILinksProps {
  id: string
  name: string
  keys: ILinksKeys
  provider: string
}

interface ILinksGenerate {
  ed25519: () => Promise<any>
  rsacsr: () => Promise<any>
}

interface ILinks {
  get: (userToken: string) => Promise<any>
  connect: (userToken: string, link: ILinksProps) => Promise<any>
  disconnect: (userToken: string, id: string) => Promise<any>
  refresh: (userToken: string, id: string) => Promise<any>
  generate: ILinksGenerate
}

interface IMarkets {
  prices: (userToken: string) => Promise<any>
}

interface ITokens {
  create: (userToken: string) => Promise<any>
}

interface IMerklebase {
  accounts: IAccounts
  links: ILinks
  balances: IBalances
  entities: IEntities
  markets: IMarkets
  tokens: ITokens
  common: ICommon
}

const merklebaseUrl = 'https://api.merklebase.io'

class MerklebaseAPI implements IMerklebase {
  ApiKey: string
  baseUrl: string
  constructor(ApiKey: string, url: string = merklebaseUrl) {
    console.log('Merklebase SDK initialized')
    this.ApiKey = ApiKey
    this.baseUrl = url
  }

  accounts: IAccounts = {
    get: async (userToken: string) => {
      try {
        const response = await axios.get(`${this.baseUrl}/accounts/get`, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
  }

  links: ILinks = {
    get: async (userToken: string) => {
      try {
        const response = await axios.get(`${this.baseUrl}/links/get`, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
    connect: async (userToken: string, link: ILinksProps) => {
      try {
        const response = await axios.post(`${this.baseUrl}/links/connect`, link, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
    disconnect: async (userToken: string, id: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/links/disconnect`,
          {
            id,
          },
          {
            headers: {
              authorization: this.ApiKey,
              token: userToken,
            },
          }
        )
        return response.data
      } catch (error) {
        return error
      }
    },
    refresh: async (userToken: string, id: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/links/refresh`,
          {
            id,
          },
          {
            headers: {
              authorization: this.ApiKey,
              token: userToken,
            },
          }
        )
        return response.data
      } catch (error) {
        return error
      }
    },
    generate: {
      ed25519: async () => {
        try {
          const response = await axios.post(
            `${this.baseUrl}/links/generate/ed25519`,
            {},
            {
              headers: {
                authorization: this.ApiKey,
              },
            }
          )
          return response.data
        } catch (error) {
          return error
        }
      },
      rsacsr: async () => {
        try {
          const response = await axios.post(
            `${this.baseUrl}/links/generate/rsacsr`,
            {},
            {
              headers: {
                authorization: this.ApiKey,
              },
            }
          )
          return response.data
        } catch (error) {
          return error
        }
      },
    },
  }

  balances: IBalances = {
    get: async (userToken: string) => {
      try {
        const response = await axios.get(`${this.baseUrl}/balances/get`, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
  }

  entities: IEntities = {
    get: async (userToken: string) => {
      try {
        const response = await axios.get(`${this.baseUrl}/entities/get`, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
    create: async (userToken: string, entity: IEntitiesParams) => {
      try {
        const response = await axios.post(`${this.baseUrl}/entities/create`, entity, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
    update: async (userToken: string, id: string, entity: IEntitiesParams) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/entities/update`,
          {
            id,
            ...entity,
          },
          {
            headers: {
              authorization: this.ApiKey,
              token: userToken,
            },
          }
        )
        return response.data
      } catch (error) {
        return error
      }
    },
    remove: async (userToken: string, id: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/entities/remove`,
          {
            id,
          },
          {
            headers: {
              authorization: this.ApiKey,
              token: userToken,
            },
          }
        )
        return response.data
      } catch (error) {
        return error
      }
    },
  }

  markets: IMarkets = {
    prices: async (userToken: string) => {
      try {
        const response = await axios.get(`${this.baseUrl}/markets/prices`, {
          headers: {
            authorization: this.ApiKey,
            token: userToken,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
  }

  tokens: ITokens = {
    create: async () => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/tokens/create`,
          {},
          {
            headers: {
              authorization: this.ApiKey,
            },
          }
        )
        return response.data
      } catch (error) {
        return error
      }
    },
  }

  common: ICommon = {
    supportedCurrencies: async () => {
      try {
        const response = await axios.get(`${this.baseUrl}/common/supportedCurrencies`, {
          headers: {
            authorization: this.ApiKey,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
    supportedProviders: async () => {
      try {
        const response = await axios.get(`${this.baseUrl}/common/supportedProviders`, {
          headers: {
            authorization: this.ApiKey,
          },
        })
        return response.data
      } catch (error) {
        return error
      }
    },
  }
}

export default MerklebaseAPI
