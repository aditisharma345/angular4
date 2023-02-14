import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlistComponent } from '../../loading/admin/adminlist/adminlist.component';
import { UserlistComponent } from '../../loading/admin/userlist/userlist.component';
const routes: Routes = [
  { path: 'adminlist', component: AdminlistComponent },
  { path: 'userlist', component: UserlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule {}
