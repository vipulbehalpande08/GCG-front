import { Component, OnInit } from '@angular/core';
import { VenueService } from 'src/app/shared/services/venue.service';
import { Venue } from 'src/app/shared/models/venue.model';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  venueList : Venue[] = [];
  constructor(private venueService : VenueService) { }

  ngOnInit(): void {
    this.venueList = this.venueService.getAll();
  }

}
