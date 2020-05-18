import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';
import { EventService } from 'src/app/shared/services/event.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Venue } from 'src/app/shared/models/venue.model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { VenueService } from 'src/app/shared/services/venue.service';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
  eventList: Event[];
  searchForm : FormGroup;
  venueList : Venue[];
  artistList : User[];
  constructor(fb : FormBuilder, private eventService : EventService,
    private userService : UserService, private venueService : VenueService) { 
    this.searchForm = fb.group({
      eventName : [''],
      startDate : [''],
      endDate :[''],
      sortingOrder :['']
    })
  }

  ngOnInit(): void {
    this.eventList = [];
    this.venueList = [];
    this.artistList = [];
    this.eventList = this.eventService.getEventList();
    this.artistList = this.userService.getUsersByUserType('ARTIST');
    this.venueList =this.venueService.getAll();
  }
  filterEvents(){
    let searchEvent = new Event(0, this.searchForm.get('eventName').value,'','',0,'',
    new Date(this.searchForm.get('startDate').value),new Date(this.searchForm.get('endDate').value),
    0,'',0);

    this.eventList = this.eventService.getFilteredEvents(searchEvent,0);
    console.log('filtered',this.eventList)
  }

}
