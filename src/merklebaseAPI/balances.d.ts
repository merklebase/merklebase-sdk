interface Balances {
  get: (userToken: string) => Promise<any>;
}

export { Balances };