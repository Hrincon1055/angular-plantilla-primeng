import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./childHome-router.module').then((m) => m.ChildHomeRoutesModule),
  },
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class HomeRoutingModule {}
