import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogAdded: BehaviorSubject<Dog> = new BehaviorSubject<Dog>(null);
dogAdded$: Observable<Dog> = this.dogAdded.asObservable();


  constructor(public http: HttpClient) {
    
  }

   fetchDogNames(){
    return ['Vika', 'Ebots', 'Tobis'];
  }

  public addDog(dog: Dog): void{
    this.dogAdded.next(dog);

  }
  getDogImage(){
    return this.http
    .get("https://dog.ceo/api/breeds/image/random");
    

  }
}

 

