import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = "cart";
  products: IProduct[] = [
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2016",
      description: "15 Gallon capacity",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "https://openclipart.org/download/58471/garden-cart.svg"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "April 21, 2016",
      description: "Curved claw steel hammer",
      price: 8.99,
      starRating: 4.8,
      imageUrl: "https://openclipart.org/download/312585/1545752217.svg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
