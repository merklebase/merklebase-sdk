interface IEntitiesParams {
  name: string
  description: string
  location: string
  accounts: string[]
}

interface IEntities {
  get: (userToken: string) => Promise<any>
  create: (userToken: string, entity: IEntitiesParams) => Promise<any>
  update: (userToken: string, entityId: string, entity: IEntitiesParams) => Promise<any>
  remove: (userToken: string, entityId: string) => Promise<any>
}

export { IEntities, IEntitiesParams }
