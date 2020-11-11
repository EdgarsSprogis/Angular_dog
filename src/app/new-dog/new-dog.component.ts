import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.css']
})
export class NewDogComponent implements OnInit {

  latestDogAdded: string;
  constructor(public dogService: DogService) { }

  ngOnInit(): void {
    let context = this;
    this.dogService.dogAdded$
      .subscribe((dog:Dog) => this.newDogAdded(dog));
  }

  newDogAdded(dog:Dog){
    if(dog)
    this.latestDogAdded = dog.name;
  }
}
