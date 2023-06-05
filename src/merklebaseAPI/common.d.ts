interface ICommon {
  supportedCurrencies: () => Promise<any>;
  supportedProviders: () => Promise<any>;
}

export { ICommon };