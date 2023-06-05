interface Markets {
  prices: (userToken: string) => Promise<any>;
}

export { Markets };