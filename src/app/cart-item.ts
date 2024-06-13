import { StoreProduct } from "./store-product";

export interface CartItem {
    quantity: number,
    product: StoreProduct,
}

export interface ShoppingCartItems {
    [key: number]: CartItem;
}