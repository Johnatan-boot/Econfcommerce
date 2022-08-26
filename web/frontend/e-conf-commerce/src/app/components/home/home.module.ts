import { CarrosselComponent } from './components/reutilizaveis/carrossel/components/carrossel';
import { ModalModule } from './components/reutilizaveis/modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    CarrosselComponent,
   
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    ModalModule,


  ],
  exports:[
    CarrosselComponent
  ]
})
export class HomeModule { }
