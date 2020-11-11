import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent implements OnInit {

  dogImage: string;
  constructor(public dogService: DogService) { }

  ngOnInit(): void {
  }

  getImage(){
    this.dogService.getDogImage()
    .subscribe((image: any) => {
      this.dogImage = image.message;
    })
  }

}
