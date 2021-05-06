import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestMoviesPageRoutingModule } from './best-movies-routing.module';

import { BestMoviesPage } from './best-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestMoviesPageRoutingModule
  ],
  declarations: [BestMoviesPage]
})
export class BestMoviesPageModule {}
