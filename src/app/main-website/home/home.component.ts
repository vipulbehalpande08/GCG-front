import { Component, OnInit, Inject, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FooterService } from '../../service/footer.service';
import { TopNavBarService } from '../../service/top-navbar.service';
import { Event } from 'src/app/shared/models/event.model';
import { EventService } from '../../shared/services/event.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  element : HTMLElement;
  htmlCollection : HTMLCollection;
  cellCount = 15;
  selectedIndex = 9;
  eventList : Event[];
  constructor(public footerNav: FooterService, private eventService : EventService) {
    this.eventList = [];
   }

  ngOnInit() {
   this.eventList = this.eventService.getEventList();
  document.getElementById("home").classList.add('home'); 
  //  this.cellCount = this.eventList.length;
  //  this.selectedIndex = this.eventList.length/2;
  }
  ngAfterContentInit(){
     this.htmlCollection = document.getElementsByClassName('carousel');
    console.log(this.htmlCollection)
  }
  rotateCarousel(){
    console.log(this.selectedIndex)
    let angle = this.selectedIndex / this.cellCount * 360;
    console.log('angle', angle);
    //let element : HTMLElement = document.getElementsByClassName('carousel');
    
    console.log()
    // element.setAttribute
     this.htmlCollection.item(0).setAttribute('style','transform:rotateY('+angle+'deg)')
    console.log(this.htmlCollection.item(0).getAttribute('style'))
  }
  onPrevClick(){
    // let prevButton = document.getElementsByClassName('previous-button');
    console.log('prev clicked');
    this.selectedIndex--;
    this.rotateCarousel();
  } 
  onNextClick()
  {
    this.selectedIndex++;
    this.rotateCarousel();
  }
   rem(){
     this.htmlCollection.item(0).setAttribute('style','transform: translateZ(-488px);')
   }
  
}
