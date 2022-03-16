import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  phoneId = '';
  productList = [];
  chosenPhone: any = '';
  allReady = false;

  constructor(
    private route: ActivatedRoute,
    private phonoService: PhoneService,
    private location: Location
    
  ) { }
  
  
  ngOnInit(): void {
    this.getPhone();
  }
  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    // this.phonoService.getProduct(this.phoneId).subscribe(((data: any) => {
    //   this.chosenPhone = data;
    //   this.allReady = true;
    // }));
  }
}

// goBack(): void {
//   this:location.back(),
// }
