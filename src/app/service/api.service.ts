import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}


  // Get All Companies
  getAllCompanies() {
    return this.http.get('../../assets/json/Company.json');
  }

  // Get All Products
  getAllProducts(){
    return this.http.get('../../assets/json/AllProduct.json');
  }

  // Get All Hepo Products
  getAllHepoProducts() {
    return this.http.get('../../assets/json/Hepo.json');
  }

  // Get All Everday Products
  getAllEverydayProducts() {
    return this.http.get('../../assets/json/Everyday.json');
  }

  // Get All Rehau Products
  getAllRehauProducts() {
    return this.http.get('../../assets/json/Rehau.json');
  }
  getKeys() {
    return this.http.get('../../assets/json/keys.json');
  }
  // Get All Hepo Products

  // Get All wicker Products
  getAllWickerProducts() {
    return this.http.get('../../assets/json/WickerBaskets.json');
  }

  // Get All flora Products
  getAllFloraProducts() {
    return this.http.get('../../assets/json/Flora.json');
  }

  // Get All Palladium Products
  getAllPalladiumProducts() {
    return this.http.get('../../assets/json/Palladium.json');
  }

  // Get All Telescopic Channel
  getAllTelescopicChannel() {
    return this.http.get('../../assets/json/TelescopicChannel.json');
  }

  // Get All Godrej Products
  getAllGodrejProducts(){
    return this.http.get('../../assets/json/Godrej.json');
  }

  // Get All Europa Products
  getAllEuropaProducts(){
    return this.http.get('../../assets/json/Europa.json');
  }
}
