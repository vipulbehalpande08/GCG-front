import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faClock,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.scss'],
  
})
export class ExhibitionDetailsComponent implements OnInit {
  faCalendar=faCalendarAlt;
  faClock=faClock;
  faMapMarkerAlt=faMapMarkedAlt;
  constructor() { }

  ngOnInit() {
    
  }

}
