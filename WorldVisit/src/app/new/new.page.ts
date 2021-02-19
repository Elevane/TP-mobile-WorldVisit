import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  data: any;
  @ViewChild('dateTime') datePicker;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data= this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
    console.log(this.datePicker);
  }

    


  dateProcess(date){
    console.log(date.detail.value);
    //créer l'objet en bade de donnée
    this.router.navigate(['home']);
  }
}
