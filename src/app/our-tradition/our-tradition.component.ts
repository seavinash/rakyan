import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { RakyanService } from '../services/rakyanservice';
import { TraditionModel } from '../models/traditionmodel';

@Component({
  selector: 'app-our-tradition',
  templateUrl: './our-tradition.component.html'
})

export class OurTraditionComponent{
    errorMsg: any;
    dataList = [];
    smallLogo: string;

    constructor( private rakyanservice: RakyanService, private spinner: NgxSpinnerService ){}

    ngOnInit() {
        this.spinner.show();
        this.rakyanservice.getTraditionData()
        .subscribe( (response: TraditionModel) => {
            console.log(response[0]);
            this.dataList = response[0].data;
            this.smallLogo = '../assets/images/only_r_logo.png';
            this.spinner.hide();
        }, (error) => {
            this.errorMsg = error;
            console.log(this.errorMsg);
        });
    }
}
