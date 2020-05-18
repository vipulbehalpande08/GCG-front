import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { EventService } from 'src/app/shared/services/event.service';
import { Event } from 'src/app/shared/models/event.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { Venue } from 'src/app/shared/models/venue.model';
import { VenueService } from 'src/app/shared/services/venue.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  addEventForm : FormGroup;
  editEventForm : FormGroup;
  eventList : Event[];
  categoryList : Category[] = [];
  eventIdForUpdate : number;
  galleryPath :string='';
  selectedFile : File;
  artistList: User[];
  startDate: Date;
  endDate: Date;
  venueList:Venue[];
  selectedCategory: number;
  selectedLocation : number;
  selectedArtist : string;
  constructor(private eventService : EventService,
    private categoryService : CategoryService,
    private userService: UserService,
    private venueService: VenueService,
     fb : FormBuilder) {
    this.venueList = [];
    this.startDate = new Date();
    this.endDate = new Date();
    this.eventList = [];
    this.artistList = [];
    this.editEventForm = fb.group({
      eventId : null,
      eventName : ['', Validators.required],
      startDate : ['', Validators.required],
      endDate : ['', Validators.required],
      venueId : ['', Validators.required],
      artistIds : [''],
      categoryId : ['', Validators.required],
      // uploadImages : '',
      eventDescription :['', Validators.required]
    });
    
    this.addEventForm = fb.group({
      // eventId : null,
      eventName : ['', Validators.required],
      startDate : ['', Validators.required],
      endDate : ['', Validators.required],
      venueId : ['', Validators.required],
      artistIds : [''],
      categoryId : ['', Validators.required],
      uploadImages : '',
      eventDescription :['', Validators.required]
    });
   }

  ngOnInit(): void {
    // this.getAllEvents();
    this.eventList = this.eventService.getEventList();
    this.getCategoryList();
    this.artistList = this.userService.getUsersByUserType('ARTIST');
    this.venueList = this.venueService.getAll();
    console.log(this.categoryList);
  }
   getAllEvents(){
     this.eventService.getAllEvents().subscribe((data)=>{
      for ( const item of (data as any) ){
        this.eventList.push(new Event(
          item.eventId,
          item.eventName,
          item.description,
          item.artistIds,
          item.price,
          item.isPaid,
          item.startDate,
          item.endDate,
          item.venueId,
          item.galleryPath,
          item.categoryId
        ))
      }
     }, (err) =>{
       console.log('error while getting all events data');
     })
   }
  //  get initial category list
  getCategoryList(){
    this.categoryService.getAllCategory().subscribe((data)=>{
      for ( const item of (data as any) ){
        this.categoryList.push(new Category(item.categoryId, item.categoryName, item.parentCategoryId))
      }
    })
  }
  
  addEvent(data :Event){
    // console.log('eventdata ', data);
    let event = new Event(0, this.addEventForm.get('eventName').value,
    this.addEventForm.get('eventDescription').value,
    this.addEventForm.get('artistIds').value,
    0.00, 'N',this.addEventForm.get('startDate').value,
    this.addEventForm.get('endDate').value,
    this.addEventForm.get('venueId').value,
    this.galleryPath,
    this.addEventForm.get('categoryId').value);
    this.eventService.createEvent(event).subscribe((res)=>{
      alert('event added successfully'+res);
      this.eventService.uploadFile(this.selectedFile, res.toString());
      this.eventList= this.eventService.getEventList();
      document.getElementById('addEventModal').click();
      this.addEventForm.reset();
    }, (err) => {
      alert('something went wrong while adding event');
    })
    // console.log('event details :', event);
  }
  showContent(event : Event){
    console.log('current event', event);
    this.eventIdForUpdate = event._eventId;
    this.galleryPath = event._galleryPath
    this.editEventForm.controls['eventName'].setValue(event._eventName);
    this.editEventForm.controls['startDate'].setValue(event._startDate);
    this.editEventForm.controls['endDate'].setValue(event._endDate);
    // this.editEventForm.controls['categoryId'].setValue(event._categoryId);
    this.selectedCategory = event._categoryId;
    this.selectedLocation = event._venueId;
    this.selectedArtist = event._artistIds;
    // this.editEventForm.controls['venueId'].setValue(event._venueId);
    // this.editEventForm.controls['artistIds'].setValue(event._artistIds);
    this.editEventForm.controls['eventDescription'].setValue(event._description);
  }
  editEvent(data){
    console.log('select category',data.target.elements['categoryId'].value);
    let event = new Event(this.eventIdForUpdate, data.target.elements['eventName'].value,
    data.target.elements['eventDescription'].value,
    data.target.elements['artistIds'].value,
    0.00, 'N',data.target.elements['startDate'].value,
    data.target.elements['endDate'].value,
    data.target.elements['venueId'].value,
    this.galleryPath,
    data.target.elements['categoryId'].value);
    this.eventService.updateEvent(event).subscribe((res)=>{
      alert('event has been updated');
      document.getElementById('editEventModal').click();
      this.editEventForm.reset();
    }, (err)=>{alert('server error')})
    // console.log('updated event model', event);
  }
  deleteEvent(eventId:number){
    console.log(eventId); 
    this.eventService.deleteEvent(eventId).subscribe(
      (data)=>{
        alert('event successfully deleted...')
        this.eventList = [];
        this.getAllEvents();
      },
      (err)=>{
        alert('something went wrong while removing event')
      }
    )
  }
  clear(){
    this.addEventForm.reset();
    this.editEventForm.reset();
  }
  onUploadFile(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    // this.eventService.uploadFile(this.selectedFile);
  }
}

