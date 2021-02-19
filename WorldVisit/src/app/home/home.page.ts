import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countries: Array<any>;
  constructor(private firebase: AngularFirestore) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.firebase
      .collection('country')
      .valueChanges({ idField: 'id' })
      .subscribe((res) => {
        this.countries = res;
        console.log(this.countries);
      });
  }
}
