import { initCreateLinkComponent } from "./createLink.js";

class MerklebaseUI {
  constructor(apiKey, url) {
    this.apiKey = apiKey;
    this.url = url;
  }

  links = {
    connect: () => {
      initCreateLinkComponent(this.apiKey, this.url);
    },
  };
}

export { MerklebaseUI };

export default { MerklebaseUI };
