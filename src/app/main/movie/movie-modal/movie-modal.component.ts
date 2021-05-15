import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Movie} from "../../interfaces/movie.model";

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


  constructor(private modelController: ModalController) { }

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
}
