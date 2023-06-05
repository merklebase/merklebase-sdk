interface Common {
  supportedCurrencies: () => Promise<any>;
  supportedProviders: () => Promise<any>;
}

export { Common };