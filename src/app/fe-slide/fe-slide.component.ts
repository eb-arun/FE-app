import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fe-slide',
  templateUrl: './fe-slide.component.html',
  styleUrls: ['./fe-slide.component.scss']
})
export class FeSlideComponent implements OnInit {
  @Input() max: number;           //Maximum Limit
  @Input() min: number;           // Minimum Limit
  @Input() title: any;            // Label Title
  @Input() step: number;          // Increment Level
  @Input() range: any;            // defalut value

  @Output() ageRecived = new EventEmitter();  // Emit the change value

  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }
  ageChange(data) {
    console.log('emit age', data);
    this.ageRecived.emit(data);
  }

}
