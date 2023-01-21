import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }

  getAllTrendingProducts(){
    return this.http.get('../../assets/json/HomePageTrending.json')
  }
}