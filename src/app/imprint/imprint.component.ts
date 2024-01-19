import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  constructor(private scroller: ViewportScroller) {

  }

  ngOnInit() {
    this.scrollUp()
  }

  
  scrollUp() {
    this.scroller.scrollToAnchor("scroll-top");
  }
}
