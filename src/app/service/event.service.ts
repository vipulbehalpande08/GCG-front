import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event.model';
@Injectable()
export class EventService{
 
    private eventUrl : string;
    constructor(public http : HttpClient){
        this.eventUrl = 'http://localhost:8080/api/event/';
    }
    public getAllEvents(): Observable<Event[]>{
        // console.log(this.eventUrl);
        return this.http.get<Event[]>(this.eventUrl+'getAll');
    }
    public addEvent(event : Event){
        return this.http.post(this.eventUrl+'add', event, {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        })
    }
}