import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { b } from "@angular/core/src/render3";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProduct: IProduct[];
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

  constructor() {
    this.filteredProduct = this.products;
    this.listFilter = "";
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // do something at init
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List : " + message;
  }
}
