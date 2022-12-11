import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from 'src/app/shared/components/product/product.component';
import { FavoriteProductsComponent } from '../favorite-products/favorite-products.component';
import { ThemeModule } from 'src/app/shared/modules/theme/theme.module';
import { HeaderComponent } from '../header/header.component';
import { RemoveFavoriteComponent } from 'src/app/shared/components/remove-favorite/remove-favorite.component';
import { RouterModule, Routes } from '@angular/router';

import { InfiniteScrollModule } from "ngx-infinite-scroll";



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'favorites',
        component: FavoriteProductsComponent
      }
    ]
  },
];


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    ProductComponent,
    FavoriteProductsComponent,
    HeaderComponent,
    ProductsComponent,
    FavoriteProductsComponent,
    HeaderComponent,
    RemoveFavoriteComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    InfiniteScrollModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
