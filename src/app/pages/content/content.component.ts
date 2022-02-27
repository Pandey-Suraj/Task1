import { Component, OnInit } from '@angular/core';
// import CarJson from '../car.json';


// interface CARS{
//   albumId: Number;
//   id: Number;
//   title: String;
//   url:String;
//   thumbnailUrl: String;

// }


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
  

//   Cars : CARS[] = CarJson;

//   imgClickedArr = [];
//   count: any = 0;
//   completed = [];
//   isChecked = [];

//   // select= 'notselected';

//   // Selected(i){
//   //   const element = i.target;
//   //   console.log(element)
//   //   // console.log(i.select)
//   //  if (this.select == 'notselected'){
//   //   this.select = 'selected'
//   //   console.log(i)
    
//   //  }
//   //  else{
//   //    this.select = 'notselected'
//   //    console.log(i)
//   //  }
    
//   // }
//   constructor() {
//     // console.log(this.Cars) 
//   }
//   ngOnInit(): void {
//     console.log('oninit');
//   }
//   imageClicked(img: any) {
//     this.count = this.count + 1;
//     //imgClickedArr contains the selected objects, find if the object already exists in the array before pushing the object to avoid redundency and remove the object from the array when image is de-selected also don't forget to update the count
//     const found = this.imgClickedArr.some((el: any) => el.id === img.id);
//     if (!found) {
//       img.isChecked = true;
//       img.count = this.count;
//       this.imgClickedArr.push(img);
//     }
//     if (found) {
//       img.count = 0;
//       this.imgClickedArr.splice(
//         this.imgClickedArr.findIndex((a) => a.id === img.id),
//         1
//       );
//       this.count = 0;
//       this.imgClickedArr.forEach((element) => {
//         this.count = this.count + 1;
//         element.count = this.count;
//       });
//     }
//     console.log('clickedArr', this.imgClickedArr);
//   }
// }



imgClickedArr: any[] = [];
count: any = 0;
imageArr = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/92c952',
  },
  {
    userId: 2,
    id: 2,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/771796',
  },
  {
    userId: 3,
    id: 3,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/24f355',
  },
  {
    userId: 4,
    id: 4,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/f66b97',
  },
  {
    userId: 5,
    id: 5,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/56a8c2',
  },
  {
    userId: 6,
    id: 6,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/92c952',
  },
  {
    userId: 7,
    id: 7,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/771796',
  },
  {
    userId: 8,
    id: 8,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/24f355',
  },
  {
    userId: 9,
    id: 9,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/f66b97',
  },
  {
    userId: 10,
    id: 10,
    title: 'delectus aut autem',
    completed: false,
    isChecked: false,
    count: 0,
    imgPath:
      'https://via.placeholder.com/600/56a8c2',
  },
];
ngOnInit(): void {
  console.log('oninit');
}
imageClicked(img: any) {
  this.count = this.count + 1;
  //imgClickedArr contains the selected objects, find if the object already exists in the array before pushing the object to avoid redundency and remove the object from the array when image is de-selected also don't forget to update the count
  const found = this.imgClickedArr.some((el: any) => el.id === img.id);
  if (!found) {
    img.isChecked = true;
    img.count = this.count;
    this.imgClickedArr.push(img);
  }
  if (found) {
    img.count = 0;
    this.imgClickedArr.splice(
      this.imgClickedArr.findIndex((a) => a.id === img.id),
      1
    );
    this.count = 0;
    this.imgClickedArr.forEach((element) => {
      this.count = this.count + 1;
      element.count = this.count;
    });
  }
  console.log('clickedArr', this.imgClickedArr);
}
}
