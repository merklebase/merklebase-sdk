import { IAccounts } from "./accounts";
import { ILinks } from "./links";
import { IBalances } from "./balances";
import { IEntities } from "./entities";
import { IMarkets } from "./markets";
import { ITokens } from "./tokens";
import { ICommon } from "./common";
interface IMerklebase {
    accounts: IAccounts;
    links: ILinks;
    balances: IBalances;
    entities: IEntities;
    markets: IMarkets;
    tokens: ITokens;
    common: ICommon;
}
declare class MerklebaseAPI implements IMerklebase {
    ApiKey: string;
    baseUrl: string;
    constructor(ApiKey: string, url?: string);
    accounts: IAccounts;
    links: ILinks;
    balances: IBalances;
    entities: IEntities;
    markets: IMarkets;
    tokens: ITokens;
    common: ICommon;
}
export default MerklebaseAPI;
