import { Component, OnInit } from '@angular/core';
import { faPlaceOfWorship} from '@fortawesome/free-solid-svg-icons';
import { faHandshake, faClock,faLightbulb} from '@fortawesome/free-regular-svg-icons'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import {  fas } from '@fortawesome/free-solid-svg-icons';
// import { fad } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faHandshake = faHandshake;
  faPlaceOfWorship = faPlaceOfWorship;
  faLightBulb = faLightbulb;
   faClock = faClock;
  constructor() { }

  ngOnInit() {
  }

}
