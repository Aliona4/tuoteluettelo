import { Component, OnInit } from '@angular/core';
 import { Phones } from '../phone';
// import { Phones } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  title = 'Tuoteluettelo';
  // phone: phone;
  productList!: any[];
  searchText: string | undefined;
  order = '';
  products: any;
  // products: any;

  selectChangeHandler(event: any) {
    this.order = event.target.value;
  }
  
  constructor(
    public phoneService: PhoneService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe((data: any[]) => {
      this.productList = data;
    },
      // this.phoneService.getProducts().subscribe((products: any) => this.products = products);
      // this.phoneService.getProducts().subscribe((data: any[] | undefined) => {
      //   this.productList = data;
     
      (error: any) => {
        console.log('http-error:');
        console.log(error);
      }
    );

  }
}
