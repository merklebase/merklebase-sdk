interface ILinksKeys {
  api_key: string
  api_secret: string
  passphrase: string
}

interface ILinksProps {
  id: string;
  name: string;
  keys: ILinksKeys;
  provider: string;
}

interface ILinksGenerate {
  ed25519: () => Promise<any>
  rsacsr: () => Promise<any>
}

interface ILinks {
  get: (userToken: string) => Promise<any>;
  connect: (userToken: string, link: ILinksProps) => Promise<any>;
  disconnect: (userToken: string, linkId: string) => Promise<any>;
  refresh: (userToken: string, linkId: string) => Promise<any>;
  generate: ILinksGenerate;
}

export { ILinks, ILinksKeys, ILinksGenerate, ILinksProps };
