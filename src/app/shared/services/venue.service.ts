import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venue } from '../models/venue.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
    })};
@Injectable()
export class VenueService{

    venueUrl : string;
    venueList : Venue[];
    constructor(private http : HttpClient){
        this.venueUrl="http://localhost:8080/api/venue";
        this.venueList = [];
    }
    addVenue(venue : Venue){
        return this.http.post(this.venueUrl+'/add',venue, httpOptions);
    }
    removeVenueById(venueId : number){
        this.http.delete(this.venueUrl+'/removeById/'+venueId).subscribe((data)=>console.log(data));
    }
    updateVenue(venue : Venue){
        return this.http.post(this.venueUrl+'/update', venue, httpOptions);
    }
    uploadFile(venueId : number, file : File){
        const data = new FormData();
      data.append('file', file);
        this.http.post(this.venueUrl+'/uploadFile/'+venueId, data)
        .subscribe((res)=>{
            alert('Image uploaded successful');
        },(err)=> alert('Something went wrong while uploading file'));
    }
    getAll(): Venue[]{
        let venueList: Venue[] = []; 
        this.http.get(this.venueUrl+'/getAll').subscribe(
            (data)=>{
                for ( const venue of (data as any) ){
                    venueList.push(new Venue(venue.venueId,
                        venue.venueName,
                        venue.description,
                        venue.street,
                        venue.area,
                        venue.city,
                        venue.region,
                        venue.country,
                        venue.pin,
                        venue.isAvailable,
                        venue.galleryPath,
                        venue.fromDate,
                        venue.toDate,
                        venue.isStall,
                        venue.availableStalls,
                        venue.emailId,
                        venue.contact))                                
                  
                }
                
            })
            return venueList;
    }   
}