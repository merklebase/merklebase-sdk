interface Accounts {
  get: (userToken: string) => Promise<any>;
}

export { Accounts };