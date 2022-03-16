import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }
  
  getAllProducts(): any {
    const products = this.http.get('assets/phones/phones.json');
    return products;
    // throw new Error('Method not implemented.');
  }
  getProducts() {
    throw new Error('Method not implemented.');
  }

  
}
