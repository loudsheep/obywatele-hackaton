import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  // ==========================================

  // LINK DO WRZUCANEGO OBRAZKA

  // CZY TO PRZEJDZIE? NIE MAM POJĘCIA
  // ALE TĘPY JESTEM I NIC INNEGO NIE WYMYŚLE

  // POZDRAWIAM SERDECZNIE
  // CAŁUSKI <3
  
  // \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  // ==========================================
  img_url = "";


  loadImg(event:any){
    let inpucik = <HTMLElement>document.getElementById('img') 
    let box = <HTMLElement>document.getElementById('img_container');
    box.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) +")";
    this.img_url = URL.createObjectURL(event.target.files[0]);
    console.log(this.img_url)
  }
  tab_gatunki = ["dramat","edukacyjne","niewiem","siurek","UwU","heszkiwmeszki"]
}
