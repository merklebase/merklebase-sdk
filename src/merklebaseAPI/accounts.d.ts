interface IAccounts {
  get: (userToken: string) => Promise<any>
}

export { IAccounts }
