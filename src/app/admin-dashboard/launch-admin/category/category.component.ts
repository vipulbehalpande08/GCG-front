import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  // @ViewChild('categoryModal') categoryModal : ElementRef;
  addCategoryForm : FormGroup;
  categoryList : Category[];
  editCategoryForm : FormGroup;
  categoryIdForUpdate : number;
  selectedCat : number = 0;
  constructor(fb: FormBuilder,private categoryService : CategoryService) {
    // this.categoryModal = document.getElementsByClassName('modal');
    this.addCategoryForm = fb.group({
      categoryId : null,
      categoryName : ['', Validators.required],
      parentCategoryId :''
    })
    this.editCategoryForm = this.addCategoryForm;
    this.categoryList = [];
   }

   ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList(){
    this.categoryService.getAllCategory().subscribe((data)=>{
      for ( const item of (data as any) ){
        this.categoryList.push(new Category(item.categoryId, item.categoryName, item.parentCategoryId))
      }
    })
  }
  addCategory(){
     let cat = new Category(0, this.addCategoryForm.get('categoryName').value, this.addCategoryForm.get('parentCategoryId').value);
    this.categoryService.createCategory(cat).subscribe(data=>{
      document.getElementById('categoryModal').click(); 
      alert('Category added successfully.');
      this.categoryList = [];
      this.getCategoryList();
      this.clear();
    }, error=>{alert('Something went wrong while adding category')})
  }

  onEditClicked(category : Category){
    this.categoryIdForUpdate = category._categoryId;
    this.editCategoryForm.controls['categoryName'].setValue(category._categoryName);
    this.editCategoryForm.controls['parentCategoryId'].setValue(category._parentCategoryId);
    this.selectedCat = category._parentCategoryId;
  }
  updateCategory(event){
    console.log(this.selectedCat)
    
    let updatedCategory = new Category(this.categoryIdForUpdate,
      event.target.elements['categoryName'].value, this.selectedCat);
      this.categoryService.updateCategory(updatedCategory).subscribe((data)=>{
        alert("category updated successfully");
        this.categoryList = [];
      this.getCategoryList();
      this.clear();
      }, (error)=>alert("server error"));

      document.getElementById('editCategoryModal').click();      
  }
  clear(){
    this.addCategoryForm.reset();
    this.editCategoryForm.reset();
    this.selectedCat = 0;
  }
  deleteCategory(categoryId : number){
    this.categoryService.deleteCategory(categoryId).subscribe(data=>{
      alert('category removed successfully')
      this.categoryList = [];
      this.getCategoryList();
    }, (error)=>{alert('something went wrong while deleting category')})
  }

}
