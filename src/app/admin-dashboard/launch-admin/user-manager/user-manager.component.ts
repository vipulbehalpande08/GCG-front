import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  addUserForm : FormGroup;
  isArtist : boolean = false;
  artistList : User[];
  editUserForm : FormGroup;
  userIdForUpdate : number = 0;
  uploadImageForm : FormGroup;
  selectedFile : File;
  constructor(fb : FormBuilder, private userService : UserService) { 
    this.artistList = [];
    this.uploadImageForm =fb.group({
      uploadImage : ['', Validators.required]
    })
    this.addUserForm = this.editUserForm = fb.group({
        firstName : ['', Validators.required],
        lastName :['', Validators.required],
        email : ['', Validators.required],
        password: [''],
        repeatPassword: [''],
        phone :['', Validators.required],
        userType :['', Validators.required],
        street :[''],
        area :[''],
        city:['', Validators.required],
        region:[''],
        country:['', Validators.required],
        description:[''],
        pin:['']      
    });
  
  }

  ngOnInit(): void {
    this.userIdForUpdate = 0;
    // console.log(this.userService.getAllUser())
    this.artistList =[];
    // this.artistList = this.userService.getAllUser();
    this.artistList = this.userService.getUsersByUserType('ARTIST');
    // console.log('artist',this.artistList)
  }
  addUser(){
    console.log('user to be added')
    let newUser = new User(0,this.addUserForm.get('firstName').value,
    this.addUserForm.get('lastName').value,this.addUserForm.get('email').value,
    this.addUserForm.get('password').value,this.addUserForm.get('phone').value,
    this.addUserForm.get('street').value,this.addUserForm.get('area').value,
    this.addUserForm.get('city').value,this.addUserForm.get('region').value,
    this.addUserForm.get('country').value,this.addUserForm.get('pin').value,
    'Y',this.addUserForm.get('description').value,
    this.addUserForm.get('userType').value);
    console.log(newUser);
    this.userService.addUser(newUser).subscribe(data=>{
      this.artistList = [];  
      this.artistList = this.userService.getUsersByUserType('ARTIST');
      alert("user has been added");
      this.clear();
      document.getElementById('userModal').click();
    
    })
    
  }
  onChangeUserType(){
    if(this.addUserForm.get('userType').value == 'ARTIST'){
      this.isArtist = true;
    }else{
      this.isArtist = false;
    }
    
  }
  deleteUser(userId : number){
    this.userService.deleteUserById(userId).subscribe(
      (date)=>{alert('user successfully deleted')
      this.artistList = [];
      this.artistList = this.userService.getUsersByUserType('ARTIST');
    },
      (error)=>{(err)=>alert('server error')}
    )
  }
  editUserContent(user : User){
    this.userIdForUpdate = user._userId;
    this.editUserForm.controls['firstName'].setValue(user._firstName);
    this.editUserForm.controls['lastName'].setValue(user._lastName);
    this.editUserForm.controls['email'].setValue(user._emailId);
    this.editUserForm.controls['userType'].setValue(user._userType);
    this.editUserForm.controls['description'].setValue(user._description);
    this.editUserForm.controls['phone'].setValue(user._contact);
    this.editUserForm.controls['street'].setValue(user._street);
    this.editUserForm.controls['area'].setValue(user._area);
    this.editUserForm.controls['region'].setValue(user._region);
    this.editUserForm.controls['city'].setValue(user._city);
    this.editUserForm.controls['country'].setValue(user._country);
    this.editUserForm.controls['pin'].setValue(user._pin); 
  }
  updateUser(event){
    let updateUser = new User(this.userIdForUpdate, this.editUserForm.get('firstName').value,
    this.editUserForm.get('lastName').value,this.editUserForm.get('email').value,
    '',this.editUserForm.get('phone').value,this.editUserForm.get('street').value,
    this.editUserForm.get('area').value,this.editUserForm.get('city').value,
    this.editUserForm.get('region').value,this.editUserForm.get('country').value,
    this.editUserForm.get('pin').value,'',this.editUserForm.get('description').value,
    this.editUserForm.get('userType').value);
    this.userService.updateUser(updateUser).subscribe((data)=>{
      alert("user updated successfully");
      this.artistList = [];
      this.artistList= this.userService.getUsersByUserType(this.editUserForm.get('userType').value);
      this.clear();
      document.getElementById('editUserModal').click();
    },(err)=>{alert("server error")});
  }
  clear(){
    this.addUserForm.reset();
    this.editUserForm.reset();
    this.userIdForUpdate = 0;
    this.selectedFile = undefined;
  }
  getUser(userType : string){
    this.artistList = [];
    this.artistList = this.userService.getUsersByUserType(userType);
  }
  uploadImage(){
    console.log('upload image', this.selectedFile, 'for ', this.userIdForUpdate);
    debugger
    this.userService.uploadFile(this.userIdForUpdate, this.selectedFile);
    this.uploadImageForm.reset();
    this.clear();
    document.getElementById('uploadImageModal').click();
  }
  onFileSelected(event){
    console.log('file to be uploaded', event.target.files)
    this.selectedFile = event.target.files[0];
  }
  onUpload(eventId : number){
    this.userIdForUpdate = eventId;
  }
}
