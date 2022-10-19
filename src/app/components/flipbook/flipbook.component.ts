import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.css'],
})
export class FlipbookComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  zTab = [4, 3, 2, 1];
  pTab = [false, false, false, false];
  index = 0;

  p1 = document.getElementById('p1') as HTMLDivElement;
  p2 = document.getElementById('p2') as HTMLDivElement;
  p3 = document.getElementById('p3') as HTMLDivElement;
  p4 = document.getElementById('p4') as HTMLDivElement;

  changeManually(forward: boolean) {
    if (forward) {
      switch (this.index) {
        case 0:
          this.pTab = [true, false, false, false];
          this.zTab = [3, 4, 2, 1];
          this.index = 1;
          break;
        case 1:
          this.pTab = [true, true, false, false];
          this.zTab = [2, 3, 4, 1];
          this.index = 2;
          break;
        case 2:
          this.pTab = [true, true, true, false];
          this.zTab = [1, 2, 3, 4];
          this.index = 3;
          break;
        case 3:
          this.pTab = [false, false, false, false];
          this.zTab = [5, 3, 2, 1];
          this.index = 0;
          break;
      }
    } else {
      switch (this.index) {
        case 0:
          this.pTab = [true, true, true, false];
          this.zTab = [1, 2, 3, 4];
          this.index = 3;

          break;
        case 1:
          this.pTab = [false, false, false, false];
          this.zTab = [5, 3, 2, 1];
          this.index = 0;
          break;
        case 2:
          this.pTab = [true, false, false, false];
          this.zTab = [3, 4, 2, 1];
          this.index = 1;
          break;
        case 3:
          this.pTab = [true, true, false, false];
          this.zTab = [2, 3, 4, 1];
          this.index = 2;
          break;
      }
    }
  }
  onClicked(evt: MouseEvent) {
    let pWidth = window.innerWidth; //use .outerWidth() if you want borders
    let x = evt.pageX;
    if (pWidth / 2 > x) this.changeManually(false);
    else this.changeManually(true);
  }
  onMouseWheel(evt: WheelEvent) {
    if (evt.deltaY <= -2.5) {
      switch (this.index) {
        case 0:
          this.pTab = [true, false, false, false];
          this.zTab = [3, 4, 2, 1];
          this.index = 1;
          break;
        case 1:
          this.pTab = [true, true, false, false];
          this.zTab = [2, 3, 4, 1];
          this.index = 2;
          break;
        case 2:
          this.pTab = [true, true, true, false];
          this.zTab = [1, 2, 3, 4];
          this.index = 3;
          break;
        case 3:
          this.pTab = [false, false, false, false];
          this.zTab = [5, 3, 2, 1];
          this.index = 0;
          break;
      }
    } else if (evt.deltaY >= 2.5) {
      switch (this.index) {
        case 0:
          this.pTab = [true, true, true, false];
          this.zTab = [1, 2, 3, 4];
          this.index = 3;

          break;
        case 1:
          this.pTab = [false, false, false, false];
          this.zTab = [5, 3, 2, 1];
          this.index = 0;
          break;
        case 2:
          this.pTab = [true, false, false, false];
          this.zTab = [3, 4, 2, 1];
          this.index = 1;
          break;
        case 3:
          this.pTab = [true, true, false, false];
          this.zTab = [2, 3, 4, 1];
          this.index = 2;
          break;
      }
    }
  }
}
