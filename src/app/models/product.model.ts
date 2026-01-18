export type ProductType=
    | 'Sticker'
    | 'Framed Painting'
    | 'Engraved Glass'
    | 'Painted Clothing'
    | 'Miscellaneous'

export interface Product {
    id: string;
    type: ProductType;
    title: string;
    description: string;
    price: number;
    imageUrls: string[];
    available: boolean;
}
