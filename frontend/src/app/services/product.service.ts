import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Environments/Environment';
import { Observable } from 'rxjs';

export interface Product {
    id: string;
    volume: number;
    location: string;
}


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private apiUrl = environment.apiUrl
    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/Product/GetProducts`);
    }

    DeleteProduct(id: string) {
        return this.http.delete(`${this.apiUrl}/Product/DeleteProduct/${id}`);
    }

    AddProduct(Product: Product){
        return this.http.post(`${this.apiUrl}/Product/AddProduct`, Product);
    }

    EditProduct(Product: Product){
        return this.http.patch(`${this.apiUrl}/Product/AddProduct`, Product);
    }
}
