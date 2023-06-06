import { initCreateLinkComponent } from './createLink.js'
import ICreateLinkProps from './Icreatelink.js'
class MerklebaseUI {
  apiKey: string
  token: string
  url: string

  constructor({ apiKey, token, url = 'https://api.merklebase.io' }: MerklebaseUI) {
    this.apiKey = apiKey
    this.token = token
    this.url = url
  }

  connect({ onSuccess, onError, onCancel }: ICreateLinkProps) {
    initCreateLinkComponent({
      apiKey: this.apiKey,
      token: this.token,
      url: this.url,
      onSuccess,
      onError,
      onCancel,
    })
  }
}

export default MerklebaseUI
