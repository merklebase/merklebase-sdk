interface IBalances {
  get: (userToken: string) => Promise<any>
}

export { IBalances }
