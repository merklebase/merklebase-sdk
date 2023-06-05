interface ITokens {
  create: (userToken: string) => Promise<any>
}

export { ITokens }
