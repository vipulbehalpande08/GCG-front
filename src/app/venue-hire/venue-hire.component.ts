import { Component, OnInit } from '@angular/core';
import { VenueService } from '../shared/services/venue.service';
import { Venue } from '../shared/models/venue.model';

@Component({
  selector: 'app-venue-hire',
  templateUrl: './venue-hire.component.html',
  styleUrls: ['./venue-hire.component.scss']
})

export class VenueHireComponent implements OnInit {
  venueList : Venue[] = [];
  constructor(private venueService : VenueService) { }

  ngOnInit() {
    this.venueList = this.venueService.getAll();
  }

}
