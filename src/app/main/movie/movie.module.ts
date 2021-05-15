import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import {MovieModalComponent} from './movie-modal/movie-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage,MovieModalComponent],
  entryComponents: [MovieModalComponent]
})
export class MoviePageModule {}
