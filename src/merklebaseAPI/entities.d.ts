interface EntitiesParams {
  name: string;
  description: string;
  location: string;
  accounts: string[];
}

interface Entities {
  get: (userToken: string) => Promise<any>;
  create: (userToken: string, entity: EntitiesParams) => Promise<any>;
  update: (
    userToken: string,
    entityId: string,
    entity: EntitiesParams
  ) => Promise<any>;
  remove: (userToken: string, entityId: string) => Promise<any>;
}

export { Entities, EntitiesParams };
