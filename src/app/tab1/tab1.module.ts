import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ServiciosService } from '../services/servicios.service';
import { PeliCardPage } from '../components/peli-card/peli-card.page';
import { PeliCardPageModule } from '../components/peli-card/peli-card.module';

@NgModule({
  entryComponents:[
    PeliCardPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PeliCardPageModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  providers: [ServiciosService]
})
export class Tab1PageModule {}
