import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestMoviesPage } from './best-movies.page';

const routes: Routes = [
  {
    path: '',
    component: BestMoviesPage
  },
  {
    path: '/movie/movieId',
    loadChildren: () => import('../movie/movie.module').then(m => m.MoviePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestMoviesPageRoutingModule {}
