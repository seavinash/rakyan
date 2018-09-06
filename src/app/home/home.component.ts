import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { RakyanService } from '../services/rakyanservice';
import { HomeModel } from '../models/homemodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  errorMsg: any
  dataList = [];
  smallLogo: string;
  bannerText: string;
  bannerTopText: string;
  bannerBottomText: string;

  constructor(private rakyanservice: RakyanService, private spinner: NgxSpinnerService){}

  ngOnInit() {
      this.spinner.show();
      this.rakyanservice.getHomeData()
      .subscribe( (response: HomeModel) => {
          console.log(response[0]);
          this.dataList = response[0].data;
          this.smallLogo = '../assets/images/only_r_logo.png';
          this.bannerText = response[0].data.banner_text.split("\n");
          this.bannerTopText = this.bannerText[0];
          this.bannerBottomText = this.bannerText[1];
          this.spinner.hide();
      }, (error) => {
          this.errorMsg = error;
          console.log(this.errorMsg);
      });
  }


}
