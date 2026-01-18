import { Product } from "../models/product.model";

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'flash-001',
        type: 'Framed Painting',
        title: 'Snake and Dagger',
        description: 'Framed American traditional snake and dagger painting.',
        price: 34.99,
        imageUrls: ['images/flash-001.jpg'],
        available: true
    },
    {
        id: 'flash-004',
        type: 'Framed Painting',
        title: 'Dagger',
        description: 'Framed American traditional dagger painting.',
        price: 24.99,
        imageUrls: ['images/flash-004.jpg'],
        available: false
    },
    {
        id: 'sticker-001',
        type: 'Sticker',
        title: 'Dice',
        description: 'American traditional dice sticker.',
        price: 5.99,
        imageUrls: ['images/sticker-001.jpg'],
        available: true
    },
    {
        id: 'flash-002',
        type: 'Framed Painting',
        title: 'Skull',
        description: 'Framed American traditional skull painting.',
        price: 24.99,
        imageUrls: ['images/flash-002.jpg'],
        available: true
    }
]
