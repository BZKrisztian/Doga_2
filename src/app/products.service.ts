import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = "https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/.json";

  constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
      return this.http.get(this.apiUrl)
    }

    addProduct(product:any): Observable<any>{
      return this.http.post(this.apiUrl, product)
    }

    updateProduct(id:string,product:any): Observable<any>{
      return this.http.put(this.apiUrl+"/"+id, product)
    }

    deleteProduct(id:String): Observable<any>{
      return this.http.delete(this.apiUrl+"/"+id)
    }

}
