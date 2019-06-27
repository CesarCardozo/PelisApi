import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
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
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
