import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  styleUrls: ['./all-countries.page.scss'],
})


export class AllCountriesPage implements OnInit {

  public res;
  value: string = "";
  constructor(private http: HttpClient,  private router: Router) { }

  ngOnInit() {
    this.getApiCountries();
    
  }

  getApiCountries(){
     return this.http.get("https://restcountries.eu/rest/v2/all").subscribe(data=>{
       this.res = data;
       for (const key in data) {
        this.res[key]["imgsrc"] = "http://www.geognos.com/api/en/countries/flag/"+ this.res[key]["alpha2Code"]+".png";
       }
     });
  }


  AddToPersonnal(item){
    let navigationExtras: NavigationExtras = { state: item };
    this.router.navigate(["new"], navigationExtras);
  }

  getInput(e){
    var input = document.getElementById('search').querySelector('input');
    const val = input.value;
    console.log(val);
    if (val && val != '') {
      this.res = this.res.filter(
        item => item.name.toLowerCase().indexOf(val.toLowerCase()) > -1
     )
    }else{
      this.getApiCountries();
    }
    
  }

  
}
