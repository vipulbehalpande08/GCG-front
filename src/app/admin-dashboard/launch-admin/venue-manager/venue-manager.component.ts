import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VenueService } from 'src/app/shared/services/venue.service';
import { Venue } from 'src/app/shared/models/venue.model';

@Component({
  selector: 'app-venue-manager',
  templateUrl: './venue-manager.component.html',
  styleUrls: ['./venue-manager.component.scss']
})
export class VenueManagerComponent implements OnInit {
  addVenueForm : FormGroup;
  venueList : Venue[];
  uploadImageForm: FormGroup;
  selectedFiles : File;
  venueIdForUpload : number = 0;
  editVenueForm : FormGroup;
  constructor(fb: FormBuilder, private venueService : VenueService) {
    this.venueList = [];
    this.addVenueForm = this.editVenueForm = fb.group({
      venueName : '',
      venueDescription : '',
      fromDate : '',
      toDate : '',
      street :'',
      area :'',
      city : '',
      region : '',
      country: '',
      pin : '',
      phone :'',
      email :''
    });
    this.uploadImageForm = fb.group({
      uploadImage : ['', Validators.required]
    })
   }


  ngOnInit(): void {
    this.venueList = this.venueService.getAll();
    console.log(this.venueList)
  }

  addVenue(){
    this.venueService.addVenue(new Venue(0,
    this.addVenueForm.get('venueName').value,this.addVenueForm.get('venueDescription').value,
    this.addVenueForm.get('street').value,
    this.addVenueForm.get('area').value,this.addVenueForm.get('city').value,
    this.addVenueForm.get('region').value,this.addVenueForm.get('country').value,
    this.addVenueForm.get('pin').value,'Y','',this.addVenueForm.get('fromDate').value,
    this.addVenueForm.get('toDate').value,'N',0,this.addVenueForm.get('email').value,
    this.addVenueForm.get('phone').value)
    ).subscribe((data)=>{
      alert('venue successfully added');
      document.getElementById('venueModal').click();
      this.clear();
    })
  }
  deleteVenue(venueId : number){
    this.venueService.removeVenueById(venueId);
    this.venueList = [];
    this.venueList = this.venueService.getAll();
    this.clear();
  }
  clear(){
    this.addVenueForm.reset();
    this.editVenueForm.reset();
    this.uploadImageForm.reset();
    this.selectedFiles = null;
    this.venueIdForUpload = 0;
    this.uploadImageForm.controls['uploadImage'].setValue([]);
  }
  onFileSelected(event){
    debugger
    this.selectedFiles = event.target.files[0];
  }
  getVenueId(venueId : number){
    this.venueIdForUpload = venueId;
  }
  uploadImage(){
    debugger
    console.log('venue id',this.venueIdForUpload);
    this.venueService.uploadFile(this.venueIdForUpload, this.selectedFiles);
    this.clear();
    document.getElementById('uploadImageModal').click();
  }
  updateVenue(){
    let updatedVenue = new Venue(this.venueIdForUpload, this.editVenueForm.get('venueName').value,
    this.editVenueForm.get('venueDescription').value,
    this.editVenueForm.get('street').value,
    this.editVenueForm.get('area').value,
    this.editVenueForm.get('city').value,
    this.editVenueForm.get('region').value,
    this.editVenueForm.get('country').value,
    this.editVenueForm.get('pin').value,'Y',
    '',
    this.editVenueForm.get('fromDate').value,
    this.editVenueForm.get('toDate').value,
    'N',0,this.editVenueForm.get('email').value,
    this.editVenueForm.get('phone').value
    );
    this.venueService.updateVenue(updatedVenue).subscribe((res)=>{
      alert('venue updated successfully');
      document.getElementById('editVenueModal').click();
      this.venueList = [];
      this.venueList = this.venueService.getAll();
      this.clear();
    }, (err)=>{alert('Something went wrong while updating venue')})
    console.log('venue to be updated', updatedVenue);
  }
  onUpdateClicked(venue : Venue){
    debugger
    this.venueIdForUpload = venue._venueId;
    console.log(venue);
    this.editVenueForm.controls['venueName'].setValue(venue._venueName);
    this.editVenueForm.controls['venueDescription'].setValue(venue._description);
    this.editVenueForm.controls['fromDate'].setValue(venue._fromDate);
    this.editVenueForm.controls['toDate'].setValue(venue._toDate);
    this.editVenueForm.controls['street'].setValue(venue._street);
    this.editVenueForm.controls['area'].setValue(venue._area);
    this.editVenueForm.controls['city'].setValue(venue._city); 
    this.editVenueForm.controls['region'].setValue(venue._region);
    this.editVenueForm.controls['country'].setValue(venue._country);
    this.editVenueForm.controls['pin'].setValue(venue._pin);
    this.editVenueForm.controls['phone'].setValue(venue._contact);
    this.editVenueForm.controls['email'].setValue(venue._emailId);
  }
}
