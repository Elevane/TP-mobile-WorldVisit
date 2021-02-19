import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  @Input() country: Country;

  constructor(private firebase: AngularFirestore) {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  public deleteCountry() {
    this.firebase.doc('country/' + this.country.id).delete();
  }
}
