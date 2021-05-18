import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie.model';
import { MainService } from '../main.service';
import { ModalController } from '@ionic/angular';
import { MovieModalComponent } from './movie-modal/movie-modal.component';
import { AuthService } from '../autf/service/auth.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movie: Movie;
  actors: string[];
  awards: string[];
  starVote: number;
  upcomingMovie: boolean = false;


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

  constructor(private route: ActivatedRoute, private service: MainService, private modalController: ModalController,
    private auth: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (this.auth.user == null) {
        // eslint-disable-next-line no-var
        var userId = -1;
      }
      else {
        userId = this.auth.user.userId;
      }
      this.service.getMovie(paramMap.get('MovieId'), userId).subscribe((res) => {
        this.movie = res;
        if (new Date(Date.now()) < new Date(this.movie.releaseDate)) {
          this.upcomingMovie = true;
        }
        if (this.movie.votes != null) {
          this.starVote = this.movie.votes[0].numberOfStars;
        }
        this.actors = this.movie.actors.split(',');
        this.awards = this.movie.awards.split('.');
      }, (error) => { console.log(error); });
    });
  }


  openModal() {
    this.modalController.create({
      component: MovieModalComponent,
      componentProps: {
        movie: this.movie,
        starVote: this.starVote
      }
    }).then((modal) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if (resultData.role === 'stars') {
        this.starVote = resultData.data;
      }
    });
  }
}