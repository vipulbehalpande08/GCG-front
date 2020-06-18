import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
    })};
@Injectable()
export class EventService{
    eventUrl : string = 'http://18.202.20.201:8080/api/event/';
    sanitizer: DomSanitizer;
    constructor(private http: HttpClient, sanitizer: DomSanitizer){
      this.sanitizer = sanitizer;
    }
uploadFile(file : File , eventId : string){
      const data = new FormData();
      data.append('file', file);
      this.http.post("http://18.202.20.201:8080/api/util/uploadFiles/"+eventId, data).subscribe(
        (data)=>{
         console.log('file uploaded successfully'); 
        });
    }
    getAllEvents(): Observable<Event[]>{
       return this.http.get<Event[]>(this.eventUrl+'/getAll');
    }
    createEvent(event : Event){
        // console.log('before post', event);
        return this.http.post(this.eventUrl+'/add', event, httpOptions);
    }
    deleteEvent(eventId : number){
        return this.http.delete(this.eventUrl+'remove/'+eventId);
    }

    getUpcomingEvents() : Observable<Event[]>{
        return this.http.get<Event[]>(this.eventUrl+'/getUpcomingEvents');
    }
    getPastEvents(){
        return this.http.get<Event[]>(this.eventUrl+'/getPastEvents');
    }
    getFilteredEvents(event: Event, sortingOrder : number):Event[]{
      let eventList : Event[] =[];
      this.http.post(this.eventUrl+'/searchEvent/'+sortingOrder, event, httpOptions).subscribe((data)=>{
        for ( const item of (data as any) ){
          eventList.push(new Event(
            item.eventId,
            item.eventName,
            item.description,
            item.artistId,
            item.price,
            item.isPaid,
            item.startDate,
            item.endDate,
            item.venueId,
            item.galleryPath+"/event.jpg" ,
            item.categoryId
          ))
        }
        
       }, (err) =>{
         console.log('error while getting all filtered events');
       })
       return eventList;;
    }
    updateEvent(event : Event){
        return this.http.put(this.eventUrl+'/update', event, httpOptions);
    }
    getEventList(): Event[]{
        let eventList : Event[] =[];
        this.getAllEvents().subscribe((data)=>{
            for ( const item of (data as any) ){
              eventList.push(new Event(
                item.eventId,
                item.eventName,
                item.description,
                item.artistId,
                item.price,
                item.isPaid,
                item.startDate,
                item.endDate,
                item.venueId,
                item.galleryPath+"/event.jpg" ,
                item.categoryId
              ))
            }
            
           }, (err) =>{
             console.log('error while getting all events data');
           })
           return eventList;
    }
}
