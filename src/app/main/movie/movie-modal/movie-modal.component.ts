import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Movie} from '../../interfaces/movie.model';
import {MainService} from '../../main.service';
import {Vote} from '../../interfaces/vote.model';
import {AuthService} from '../../autf/service/auth.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {

   @Input()movie: Movie;
  array: number[] = [];
  numOfStar: number;
  showPicture: boolean;


  constructor(private modelController: ModalController, private service: MainService, private authService: AuthService,
              private route: Router) { }

  ngOnInit() {

    this.showPicture = true;
  }
  onCancel() {

    this.modelController.dismiss();
  }
  changeRating(num: number) {

    this.showPicture = false;
    this.numOfStar = num;
    this.array=[];

    while(num!==0){
      this.array.push(num);
      num--;
    }
  }

  rateFilm() {

    const vote = {} as Vote;

    if(this.authService.user == null){
      console.log('usao');
      this.route.navigate(['/tabs/user']);
      this.modelController.dismiss();

    }

    else{
      vote.movieId = this.movie.movieId;
    vote.userId = this.authService.user.userId;
    vote.numberOfStars= this.numOfStar;
    this.service.voteMovie(vote).subscribe(
      res=> console.log(res),
      err=>console.log(err.message)
    );
          }
  }
}
