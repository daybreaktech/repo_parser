import { Output, Input } from "@angular/core";
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() onSearchClick: EventEmitter<any> = new EventEmitter();

  buttonDisabled = false;
  username : string = '';
  
  constructor() {
  }

  ngOnInit(): void {
  }

  onThisSearchButtonClicked() {
    this.onSearchClick.emit({username: this.username});
  }

  searchValueOnChange(event: any) {
    var value = (event.target as HTMLInputElement).value;
    this.buttonDisabled = !(value != "");
  }

}
