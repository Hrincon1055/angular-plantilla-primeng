import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { AppMenuitemComponent } from './menu/app.menuitem.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AppMenuitemComponent,
  ],
  imports: [CommonModule, PrimengModule, RouterModule.forRoot([])],
  exports: [FooterComponent, HeaderComponent, MenuComponent, RouterModule],
})
export class SharedModule {}
