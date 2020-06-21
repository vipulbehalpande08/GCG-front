import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
@Injectable()
export class ProductService{
    productUrl :string;
    productList: Product[]=[];
    constructor(private http: HttpClient){
        this.productUrl = 'http://18.202.20.201:8080/api/product/';
    }
    
    addProduct(product: Product){
       return this.http.post(this.productUrl+'addProduct', product, httpOptions);
    }
    uploadFile(productId, file : File){
        const data = new FormData();
        data.append('file', file);
        return this.http.post(this.productUrl+'uploadFile/'+productId, data);
    }
    updateProduct(product: Product){
        return this.http.post(this.productUrl+'updateProduct', product, httpOptions);
    }
    deleleById(productId : number){
        return this.http.delete(this.productUrl+'remove/'+productId);
    }
    getAllProduct(): Product[]{
        this.productList = [];
        this.http.get(this.productUrl+'getAll').subscribe(
            (data)=>{
                for ( const product of (data as any) ){
                    this.productList.push(
                        new Product(product.productId,
                            product.productName, 
                            product.description,
                            product.price,
                            product.availableStock,
                            product.ownerId,
                            product.categoryId)
                    )
                }
            }
        )
        return this.productList;
    }


}
