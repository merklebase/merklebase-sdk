declare class MerklebaseUI {
    apiKey: string;
    url: string;
    constructor(apiKey: string, url: string);
    links: {
        connect: (callback: () => void) => void;
    };
}
export default MerklebaseUI;
