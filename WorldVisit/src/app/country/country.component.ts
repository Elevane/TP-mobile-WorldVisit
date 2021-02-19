import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() country: Country;
  public imgsrc: string;

  constructor(private firebase: AngularFirestore) {}

  ngOnInit() {
    this.imgsrc =
      'http://www.geognos.com/api/en/countries/flag/' +
      this.country.countryCode +
      '.png';
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  public deleteCountry() {
    this.firebase.doc('country/' + this.country.id).delete();
  }
}
