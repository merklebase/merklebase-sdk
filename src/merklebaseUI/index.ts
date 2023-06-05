import { initCreateLinkComponent } from './createLink.js'
import ICreateLinkProps from './Icreatelink.js'
class MerklebaseUI {
  apiKey: string
  token: string
  url: string

  constructor(apiKey: string, token: string, url: string = 'https://api.merklebase.io') {
    this.apiKey = apiKey
    this.token = token
    this.url = url
  }

  links = {
    connect: ({ apiKey, token, url, onSuccess, onError, onCancel }: ICreateLinkProps) => {
      initCreateLinkComponent({
        apiKey,
        token,
        url,
        onSuccess,
        onError,
        onCancel,
      })
    },
  }
}

export default MerklebaseUI
