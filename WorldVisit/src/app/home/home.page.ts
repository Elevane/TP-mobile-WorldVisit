import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countries: Array<any>;
  constructor(private firebase: AngularFirestore, private router: Router) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.firebase
      .collection('country')
      .valueChanges({ idField: 'id' })
      .subscribe((res) => {
        this.countries = res;
        for (let i = 0; i < this.countries.length; i++) {
          this.countries[i].visitDate = new Date(this.countries[i].visitDate);
        }
        this.countries.sort((x, y) => {
          return y.visitDate - x.visitDate;
        });
      });
  }

  navigate() {
    this.router.navigate(['all']);
  }
}
