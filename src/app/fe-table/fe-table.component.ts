import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fe-table',
  templateUrl: './fe-table.component.html',
  styleUrls: ['./fe-table.component.scss']
})
export class FeTableComponent implements OnInit {
  @Input() records:any[];  // Total rows JSON
  @Output() updateRecord = new EventEmitter(); // Event to updateRecord
  @Output() deleteRecord = new EventEmitter(); // Event to deleteRecord
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('fe table c', this.records);
  }

  updateUserData(data) {
    this.updateRecord.emit(data);
  }
  deleteUserData(data) {
    this.deleteRecord.emit(data);
  }
}
