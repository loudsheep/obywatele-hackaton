import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img_url = "";

  nick = "iLikeToReadBooks"
  email = "book_enjoyer@gmail.com"
  loadImg(event:any){
    let inpucik = <HTMLElement>document.getElementById('img') 
    let box = <HTMLElement>document.getElementById('img_container');
    box.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) +")";
    this.img_url = URL.createObjectURL(event.target.files[0]);
    console.log(this.img_url)
  }
}
