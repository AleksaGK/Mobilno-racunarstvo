import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie.model';
import { MainService } from '../main.service';
import {ModalController} from '@ionic/angular';
import {MovieModalComponent} from './movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movie: Movie;
  actors: string[];
  awards: string[];

  sliderConfiguration = {
    slidesPerView: 2.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };

  constructor(private route: ActivatedRoute, private service: MainService,private modalController: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.service.getMovie(paramMap.get('MovieId')).subscribe((res) => {
        this.movie = res;
        this.actors = this.movie.actors.split(',');
        this.awards = this.movie.awards.split('.');
      }, (error) => { console.log(error); });
    });



  }

  openModal() {
    this.modalController.create({
      component: MovieModalComponent,
      componentProps:{
        movie:this.movie
      }
    }).then((modal)=>{
      modal.present();
    });
  }
}
