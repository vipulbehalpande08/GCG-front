import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../models/category.model';
import { map, catchError } from 'rxjs/operators'
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
    })};
@Injectable()
export class CategoryService{
    categoryUrl : string = 'http://18.202.20.201:8080/api/category/';
   
    constructor(private http : HttpClient){   
        
    }
    getAllCategory():Observable<Category[]>{
        return this.http.get<Category[]>(this.categoryUrl+'/getAll');
    }
    createCategory(category: Category){
        
        return this.http.post<Category>(this.categoryUrl+'/add', category, httpOptions);
    }
    deleteCategory(categoryId : number){
        return this.http.delete(this.categoryUrl+'/remove/'+categoryId);
    }
    updateCategory(category: Category){
        return this.http.put(this.categoryUrl+"/update", category, httpOptions);
    }
}
