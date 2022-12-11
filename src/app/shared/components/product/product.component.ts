import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddFavoriteProduct, RemoveFavoriteProduct } from 'src/app/store/actions/product.actions';
import { RemoveFavoriteComponent } from '../remove-favorite/remove-favorite.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  @Input() isFavorite!: boolean;
  constructor(
    private store: Store,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addToFavorite(product: any) {
    if (product.isFavorite) {
      this.matDialog.open(RemoveFavoriteComponent, {
        data: {
          title: 'Are you sure you want to remove this product ?',
        }
      }).afterClosed().subscribe(response => {
        if (response) {
          product.isFavorite = !product.isFavorite;
          this.store.dispatch(RemoveFavoriteProduct(product));
        }
      });
    } else {
      product.isFavorite = true;
      this.store.dispatch(AddFavoriteProduct(product));
    }
  }


  remove(product: any) {
    this.store.dispatch(RemoveFavoriteProduct(product));
  }
}
