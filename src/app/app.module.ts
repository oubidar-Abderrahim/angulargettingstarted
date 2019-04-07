import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacePipe } from "./shared/convert-to-space.pipe";
import { starComponent } from "./shared/star.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./products/product-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    starComponent,
    ProductDetailComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
