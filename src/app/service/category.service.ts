import {Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService{

    private categoryUrl : string;
    public categoryList : Category[];
    constructor( private http: HttpClient){
        this.categoryUrl = 'http://localhost:8080/api/category/';
        this.categoryList = [];
    }
    public getAll(): Category[]{
        let response =  this.http.get(this.categoryUrl+"getAll");
            response.subscribe((data)=>{
                for ( const categoryItem of (data as any) ){
                        this.categoryList.push({
                            categoryId : categoryItem.categoryId,
                            categoryName : categoryItem.categoryName,
                            parentCategoryId : categoryItem.parentCategoryId
                        })
                }
            })
        return this.categoryList;
    }
    public addCategory(category : Category){
        this.http.post(this.categoryUrl+'add', category, {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        }).subscribe(responseData =>{
            console.log(responseData);
        })
    }
    public removeCategory(categoryId : number){
        console.log('remove category url',this.categoryUrl+"remove/"+categoryId)
        this.http.delete(this.categoryUrl+"remove/"+categoryId).subscribe(resp=>{console.log(resp)})
    }
}