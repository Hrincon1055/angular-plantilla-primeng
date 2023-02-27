import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth.routing';
import { Page404Component } from './page404/page404.component';
import { DashboardRoutingModule } from './modules/dashboard/dashboard.routing';
import { HomeRoutingModule } from './modules/home/home.routing';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DashboardRoutingModule,
    HomeRoutingModule,
  ],
  exports: [RouterModule, AuthRoutingModule],
})
export class AppRoutingModule {}
