import { NgModule } from '@angular/core';
import {
  PreloadingStrategy,
  RouterModule,
  Routes,
  PreloadAllModules,
} from '@angular/router';
import { ListComponent } from './admin/list/list.component';

import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { HomeComponent } from '../app/home/home.component';
import { ContactComponent } from '../app/contact/contact.component';
import { ProductComponent } from '../app/product/product.component';
import { ErrorComponentComponent } from '../app/error-component/error-component.component';

import { ProductDetailsComponent } from '../app/product-details/product-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponentComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('../app/module/module.module').then((mod) => mod.ModuleModule),
    data: { applyPreload: true },
  },
  {
    path: 'user',

    loadChildren: () =>
      import('../app/user/admin/admin.module').then((mod) => mod.AdminModule),
    data: { applyPreload: true },
  },
  {
    path: 'loading',

    loadChildren: () =>
      import('../app/loading/module/module.module').then(
        (mod) => mod.ModuleModule
      ),
    data: { applyPreload: true } /* pre-loading */,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
/*  RouterModule.forchild(routes):it tells the angular that there is routing already so just register all these routes with that instance  */
/*  RouterModule.forRoot(routes) is asking the angular to instantiate router globally. */
/* routing events are navigation error;navigation start;navigation end;navigation cancel;resolve start etc. */
