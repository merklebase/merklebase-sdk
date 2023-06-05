interface Tokens {
  create: (userToken: string) => Promise<any>;
}

export { Tokens };
