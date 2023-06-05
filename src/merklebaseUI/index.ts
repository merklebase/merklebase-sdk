import { initCreateLinkComponent } from "./createLink.js";
import ICreateLinkProps from "./Icreatelink.js";
class MerklebaseUI {
  apiKey: string;
  url: string;

  constructor(apiKey: string, url: string) {
    this.apiKey = apiKey;
    this.url = url;
  }

  links = {
    connect: ({
      token,
      onSuccess,
      onError,
      onCancel,
      apiKey,
      url,
    }: ICreateLinkProps) => {
      initCreateLinkComponent({
        onSuccess,
        onError,
        onCancel,
        apiKey,
        token,
        url,
      });
    },
  };
}

export default MerklebaseUI;
