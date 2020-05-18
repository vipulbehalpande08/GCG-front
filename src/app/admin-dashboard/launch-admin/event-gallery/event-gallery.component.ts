import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { EventService } from 'src/app/shared/services/event.service';
import {Event} from 'src/app/shared/models/event.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser'
// import {AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.scss']
})
export class EventGalleryComponent implements OnInit {

  galleryForm : FormGroup;
  eventList : Event[];
  selectedFiles : File;
  sanitizer : DomSanitizer;
  constructor(fb : FormBuilder, private http: HttpClient,
    private eventService : EventService, sanitiser : DomSanitizer) {
    this.eventList = [];
    this.sanitizer = sanitiser;
    this.galleryForm = fb.group({
      eventId : ['', Validators.required],
      uploadImage : ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.eventList = this.eventService.getEventList();
    console.log(this.eventList)
  }
   uploadImages(){
     console.log(this.selectedFiles);
    this.eventService.uploadFile(this.selectedFiles, this.galleryForm.get('eventId').value);
    this.galleryForm.reset();
    document.getElementById('galleryModal').click(); 
  }
   onFileSeleted(event){
    this.selectedFiles = event.target.files[0];
    // this.fireStorage.upload('/1', event.target.files);
   }
   
}
