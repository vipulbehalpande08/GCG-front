import { Component, OnInit } from '@angular/core';
import {Event} from '../model/event.model';
import { EventService } from '../service/event.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-exhibition-list',
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.scss']
})
export class ExhibitionListComponent implements OnInit {
  searchForm : FormGroup
  events : Event[];
  constructor(private eventService : EventService, fb : FormBuilder) { 
    this.events = [];
    this.searchForm = fb.group({
      searchEvent : [],
      startDate :[],
      endDate :[],
      sortingId :[]
    })
  }

  ngOnInit() {
   this._populateEventList();
   console.log(this.events); 
  }
  _populateEventList(){
    this.eventService.getAllEvents().subscribe(data => {
      for ( const event of (data as any)){
        this.events.push({
          eventId : event.eventId,
          eventName : event.eventName,
          description : event.description,
           artistId: event.artistId,
           price: event.price,
           isPaid: event.isPaid,
           startDate: event.startDate,
           endDate: event.endDate,
           venueId: event.venueId,
           categoryId: event.categoryId
        })
      }
      
    })
  }
  searchEvent(){
    console.log(this.searchForm.get('searchEvent').value);
    console.log(this.searchForm.get('startDate').value);
    console.log(this.searchForm.get('endDate').value);
    console.log(this.searchForm.get('sortingId').value);
  }

}
