import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogname',
  templateUrl: './dogname.component.html',
  styleUrls: ['./dogname.component.css']
})
export class DognameComponent implements OnInit {

  @Input() name: string;
  @Output() dogDeleted: EventEmitter<string> = new EventEmitter();
  @Output() GoodDog: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteDog(){
    this.dogDeleted.emit(name);
  }
  makeGoodDog(){
    this.GoodDog.emit();
  }
  
}
