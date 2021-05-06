import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestMoviesPage } from './best-movies.page';

const routes: Routes = [
  {
    path: '',
    component: BestMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestMoviesPageRoutingModule {}
