import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  }
  ,
  {
    path: 'genre',
    loadChildren: () => import('./main/movie-list/movie-list.module').then( m => m.MovieListPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
