// ================== //
// ===== Modules ==== //
// ================== //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// ================== //
// === Components === //
// ================== //

import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    
    LayoutComponent,
    
    FooterComponent,
    
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent
    
  ]
})

export class LayoutModule {}
