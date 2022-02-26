import { Component, OnInit } from '@angular/core';
import CarJson from '../car.json';

// interface CARS{
//   Id: Number;
//   ImageUrl: String;
//   Color:String;
//   Model: String;

// }

interface CARS{
  albumId: Number;
  id: Number;
  title: String;
  url:String;
  thumbnailUrl: String;

}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
  

  Cars : CARS[] = CarJson;
 
  constructor() {
    console.log(this.Cars) 
  }

  ngOnInit(): void {
  }

}
