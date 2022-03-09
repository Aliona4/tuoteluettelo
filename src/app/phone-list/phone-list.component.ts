import { Component, OnInit } from '@angular/core';
import { Phones } from '../phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  title = 'Tuoteluettelo';
  phones!: Phones[];
  constructor() { }

  ngOnInit(): void {
  }

}
