interface IMarkets {
  prices: (userToken: string) => Promise<any>
}

export { IMarkets }
