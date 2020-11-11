import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dogName: string = 'Ebots';
  dogAge: number = 6;
  isActive: boolean = false;
  dogNames: string[] = [];
  dog:Dog = new Dog();

  constructor(public dogService: DogService) { 
  }
  
  ngOnInit() {
    this.dogNames = this.dogService.fetchDogNames();

  }
  addNewDog(){
    this.dogNames.push(this.dog.name);
    this.dogService.addDog(this.dog);
  }

    onClick(newName: string) {
    this.dogNames.push(newName);
  }
  deleteDog(index:number){
    this.dogNames.splice(index, 1);
    }
  markDogAsGood(index: number){
    this.dogNames [index] = this.dogNames [index] + " ir labs suns";
}
  
}
