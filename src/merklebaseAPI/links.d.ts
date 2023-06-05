interface LinksKeys {
  api_key: string;
  api_secret: string;
  passphrase: string;
}

interface LinksGenerate {
  ed25519: () => Promise<any>;
  rsacsr: () => Promise<any>;
}

interface Links {
  get: (userToken: string) => Promise<any>;
  connect: (userToken: string, linkKeys: LinksKeys) => Promise<any>;
  disconnect: (userToken: string, linkId: string) => Promise<any>;
  refresh: (userToken: string, linkId: string) => Promise<any>;
  generate: LinksGenerate;
}

export { Links, LinksKeys, LinksGenerate };
