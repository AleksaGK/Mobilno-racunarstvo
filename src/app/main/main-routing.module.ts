import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MoviePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./autf/sign-in/sign-in.module').then(m => m.SignInPageModule)
  }, {
    path: 'sign-up',
    loadChildren: () => import('./autf/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./autf/login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
