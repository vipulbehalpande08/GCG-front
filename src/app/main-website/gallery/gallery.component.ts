import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, 
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { EventService } from '../../shared/services/event.service';
import { Event } from '../../shared/models/event.model';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public config: SwiperConfigInterface = {
    // a11y: true,
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      mousewheel:true,
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
        type:'bullets'
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
      }
    }
  eventList : Event[];
  constructor(private eventService: EventService) { 
    this.eventList = [];
  }

  ngOnInit() {
    this.eventList = this.eventService.getEventList();
  }
   public onIndexChange(index: number): void{
    console.log('swiper index:'+index);
  }
  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
  onFileSelected(event){

  }
  uploadFile(){

  }
}
