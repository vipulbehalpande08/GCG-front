import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
    })};
@Injectable()
export class UserService{
    userUrl : string;
    userList : User[];
    constructor(private http: HttpClient){
        this.userUrl ='http://localhost:8080/api/user/';
        this.userList = [];
    }
    updateUser(user: User){
        return this.http.put(this.userUrl+"update", user, httpOptions);
    }
    addUser(user : User){
        debugger
        return this.http.post<User>(this.userUrl+'/add', user, httpOptions);
    }
    deleteUserById(userId : number){
        return this.http.delete(this.userUrl+"/deleteUserById/"+userId);
    }
    uploadFile(userId : number, file : File){
        const data = new FormData();
        data.append('file', file);
        debugger
        return this.http.post(this.userUrl+"uploadFile/"+userId, data).subscribe(
            (data)=>{alert('image uploaded successfully')}, (err)=>{alert('server error')}
        );
    }
    getAllUser():User[]{
        this.http.get(this.userUrl+'/getAll').subscribe((data)=>{
            for ( const item of (data as any) ){
                this.userList.push(new User(item.userId,
                    item.firstName,
                    item.lastName,
                    item.emailId,
                    item.password,
                    item.contact,
                    item.street,
                    item.area,
                    item.city,
                    item.region,
                    item.country,
                    item.pin,
                    item.isActive,
                    item.description,
                    item.userType))}
        }, (err)=> throwError('error while adding user'))
        return this.userList;
    }   
    getUsersByUserType(userType : string){
        this.userList = [];
        this.http.get(this.userUrl+'/getUsersByUserType/'+userType).subscribe((data)=>{
            for ( const item of (data as any) ){
                this.userList.push(new User(item.userId,
                    item.firstName,
                    item.lastName,
                    item.emailId,
                    item.password,
                    item.contact,
                    item.street,
                    item.area,
                    item.city,
                    item.region,
                    item.country,
                    item.pin,
                    item.isActive,
                    item.description,
                    item.userType))}
        }, (err)=> throwError('error while adding user'))
        return this.userList;
    }
}