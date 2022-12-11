import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, tap } from 'rxjs';
import { RemoveFavoriteProduct } from 'src/app/store/actions/product.actions';
import { selectFavoriteProducts } from 'src/app/store/selector/product.selector';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit {

  favProducts$ = new BehaviorSubject<any>([]);
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.favProducts$ = this.store.select(selectFavoriteProducts).pipe(map(products => JSON.parse(JSON.stringify(products)))) as BehaviorSubject<any>;
  }

  remove(product: any) {
    product.isFavorite = false;
    this.store.dispatch(RemoveFavoriteProduct(product));
  }
}
