import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PeliCardPage } from './peli-card.page';
import { PeliDetailsPage } from '../peli-details/peli-details.page';
import { PeliDetailsPageModule } from '../peli-details/peli-details.module';

@NgModule({
  entryComponents:[PeliDetailsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliDetailsPageModule
  ],
  declarations: [PeliCardPage],
  exports :[PeliCardPage]
})
export class PeliCardPageModule {}
