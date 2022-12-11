import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { favoriteProductsReducer } from './store/reducers/products.reducer';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { ThemeModule } from './shared/modules/theme/theme.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { userReducer } from './store/reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ favoriteProducts: favoriteProductsReducer, user: userReducer }
      , {}),
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    ThemeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
