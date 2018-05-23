import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductProvider {

  constructor(public http: Http) {
    console.log('Product Provider');
  }

  getProducts(){
    return this.http.get("/assets/data.json")
      .map(response => response.json());
  }

}
