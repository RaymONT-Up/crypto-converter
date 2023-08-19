export interface ICoinItem {
    name: string,
    iconUrl: string,
    symbol: string,
    uuid: string,

    change: string;
    price: string,
    marketCap: string;

    sparkline: string[],

    rank: number;
    tier: number;
    listedAt: number;

    lowVolume: boolean;
}

export type TypesCoins = ICoinItem[]