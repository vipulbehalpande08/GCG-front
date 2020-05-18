import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {slideIn} from '../animate';
import {faPalette, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { Event } from '../model/event.model';
@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss'],
  animations:[ slideIn ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExhibitionComponent implements OnInit {
  artistName : string;
  venue : string;
  slideInState= 'in';
  faPalette=faPalette;
  faMapMarkedAlt=faMapMarkedAlt;
  @Input('event') event : any;
  constructor() {
      this.artistName = 'Julie Bradley';
      this.venue = 'Galway';
    }
  
  
  ngOnInit() {
    console.log();
  }

}
