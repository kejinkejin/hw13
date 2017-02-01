import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  outputs:['counterChange']
})
export class CounterComponent implements OnInit {
  @Output() counterChange:number;
  @Input() counter:number;
  private counterValue:number;
  
  constructor() {
    
  }

  ngOnInit() {
  }
  
  increase(){
    this.counter++;
  }
  decrease(){
    this.counter--;
  }
  

}
