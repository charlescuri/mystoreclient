import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductsService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }


  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

/*
Classe type script responsável pela chamada ao microsserviço Spring Boot que lista os produtos
autor Charles Curi
*/
