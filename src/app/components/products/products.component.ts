import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { selectFavoriteProducts } from 'src/app/store/selector/user.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<any> = [];
  favProducts$: Array<number> = [];
  isProductLoaded = false;
  infiniteScrollDistance = 1;
  infiniteScrollThrottle = 50;
  constructor(
    private store: Store,
    private httpService: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectFavoriteProducts).pipe(map(products => products.map((x: any) => x.id))).subscribe(favProds => {
      this.favProducts$ = favProds;
    });
    this.getProducts();
  }


  getProducts() {
    this.httpService.getProducts<any>()
      .subscribe(products => {
        products.forEach((product: any) => {
          product.isFavorite = this.favProducts$.includes(product.id)
        });
        this.products = this.products.concat(products);
        this.isProductLoaded = true;
      });
  }

  onScroll() {
    this.infiniteScrollThrottle += this.infiniteScrollThrottle;
    this.getProducts();
  }

}
