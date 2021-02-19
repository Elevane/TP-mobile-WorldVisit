import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  data: any;
  @ViewChild('dateTime') datePicker;
  constructor(private route: ActivatedRoute, private router: Router, private firebase: AngularFirestore) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data= this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
  }

    


  dateProcess(date){
    console.log(date);
    const country = {
      name : this.data.name,
      capital : this.data.capital,
      region: this.data.region,
      countryCode: this.data.alpha2Code,
      visitDate : date.detail.value,
    }
    
    this.firebase.collection('country').add(country);
    this.router.navigate(['home']);
  }
}
