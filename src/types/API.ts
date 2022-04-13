import exp from "constants";

export interface IApiPrice {
    regularPrice: number;
    finalPrice: number;
}

export interface IAPI {
    mainId: string;
    displayName: string;
    displayDescription: string;
    price: IApiPrice;
    displayAssets: any [];
}

export interface IApiRarity {
    id: string;
    name: string;
}

export interface IApiImages {
    background: string;
    featured: string;
    icon: string;
    full_background: string;
    icon_background: string;
}

export interface IApiIntroduction {
    chapter: string;
    season: string;
    text: string;
}

export interface IApiType {
    id: string;
    name: string
}

export interface IAPIById {
    id: string;
    name: string;
    description: string;
    rarity: IApiRarity;
    price: number;
    releaseDate: string;
    lastAppearance: string;
    images: IApiImages;
    introduction: IApiIntroduction;
    type: IApiType
}