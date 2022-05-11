import { RawProductData } from "./raw-product-data.interface";

export class ProductData {
    itemName: string;
    itemDescription: string;
    imageUrl: string;

    constructor(data: RawProductData) {
        this.itemName = data.item_name;
        this.itemDescription = data.item_description;
        this.imageUrl = data.image;
    }
}