import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { User } from 'src/app/shared/models/user.model';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-shop-manager',
  templateUrl: './shop-manager.component.html',
  styleUrls: ['./shop-manager.component.scss']
})
export class ShopManagerComponent implements OnInit {
  addProductForm : FormGroup;
  editProductForm : FormGroup;
  selectedFile : File;
  userList : User[] = [];
  categoryList : Category[]=[];
  productIdForUpdate : number = 0;
  productList: Product[] = [];
  constructor(fb : FormBuilder,
    private userService : UserService, private categoryService : CategoryService,
    private productService : ProductService) {
    this.addProductForm = this.editProductForm = fb.group({
      productName : ['', Validators.required],
      description : ['', Validators.required],
      price : ['', Validators.required],
      stock :['', Validators.required],
      categoryId : ['', Validators.required],
      ownerId :['', Validators.required],
      imageUpload:['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.userList = this.userService.getUsersByUserType('ARTIST');
    this.getCategoryList();
    this.productList = this.productService.getAllProduct();
  }
  getCategoryList(){
    this.categoryList = [];
    this.categoryService.getAllCategory().subscribe((data)=>{
      for ( const item of (data as any) ){
        this.categoryList.push(new Category(item.categoryId, item.categoryName, item.parentCategoryId))
      }
    })
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }
  addProduct(){
    let product = new Product(0,this.addProductForm.get('productName').value,
    this.addProductForm.get('description').value,this.addProductForm.get('price').value,
    this.addProductForm.get('stock').value,this.addProductForm.get('ownerId').value,
    this.addProductForm.get('categoryId').value);
    this.productIdForUpdate = 0;
    this.productService.addProduct(product).subscribe((res)=>{
      this.productIdForUpdate = Number(res);
      console.log(this.productIdForUpdate);
      this.uploadFile(this.productIdForUpdate, this.selectedFile);
      this.productList = [];
      this.productList = this.productService.getAllProduct();
      alert('product '+this.productIdForUpdate+' added successfully');
      this.clear();
    }, (err)=>{
      alert('Server Error.')
    })
    
  }
  uploadFile(productId : number,file : File){
    this.productService.uploadFile(productId,file).subscribe((data)=>{
      alert("image uploaded successfully");
    },(err)=>{alert('Something went wrong while uploading product image')}); 
    //this.clear();
  }
  clear(){
    this.selectedFile = undefined;
    this.addProductForm.reset();
    this.productIdForUpdate = 0;
  }
  deleteProduct(productId : number){
    this.productService.deleleById(productId).subscribe((data)=>{
      alert('product deleted successfully')
    }, (err)=>{alert('Server error')});
    this.productList = [];
    this.productList = this.productService.getAllProduct();
  }

  showContent(product : Product){
    console.log(product);
  }
}
