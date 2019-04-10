import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMsg: string;

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
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.listFilter = "";
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // do something at init
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProduct = this.products;
      },
      error => (this.errorMsg = <any>error)
    );
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
