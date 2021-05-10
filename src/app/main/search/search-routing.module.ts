import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: 'genre',
    loadChildren: () => import('../movie-list/movie-list.module').then( m => m.MovieListPageModule)
  },
  {
    path: ':MovieId',
    loadChildren: () => import('../movie/movie.module').then(m => m.MoviePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule { }
