import { initCreateLinkComponent } from "./createLink.js";

class MerklebaseUI {
  apiKey: string;
  url: string;

  constructor(apiKey: string, url: string) {
    this.apiKey = apiKey;
    this.url = url;
  }

  links = {
    connect: (callback: () => void) => {
      initCreateLinkComponent({ callback, apiKey: this.apiKey, url: this.url });
    },
  };
}

export default MerklebaseUI;
