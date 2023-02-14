import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { ListComponent } from './admin/list/list.component';
import { AdminlistComponent } from './loading/admin/adminlist/adminlist.component';
import { UserlistComponent } from './loading/admin/userlist/userlist.component';

import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { BindingComponent } from './binding/binding.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { ShadowdomEncapsulationComponent } from './shadowdom-encapsulation/shadowdom-encapsulation.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { AbcComponent } from './abc/abc.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductdetailsModule } from './heroes/productdetails.module';
import { ProductdetailsModuleModule } from './productdetails/productdetails-module.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AdminlistComponent,
    UserlistComponent,
    BindingComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowdomEncapsulationComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponentComponent,
    AbcComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductdetailComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ProductdetailsModule, ProductdetailsModuleModule],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent],
})
export class AppModule {}
