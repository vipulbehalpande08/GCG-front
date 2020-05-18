import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product.model';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  productList : Product[] = [];
  categoryList : Category[] = [];
  quantity : number;
  cart : Product[] = [];
  constructor(private productService: ProductService,
    private categoryService : CategoryService,
    private localStorageService : LocalStorageService) { }

  ngOnInit() {
    this.productList = this.productService.getAllProduct();
    this.getCategoryList();
  }
  searchProduct(categoryId : number){
    console.log(categoryId, ' clicked')
  }
  getCategoryList(){
    this.categoryList = [];
    this.categoryService.getAllCategory().subscribe((data)=>{
      for ( const item of (data as any) ){
        this.categoryList.push(new Category(item.categoryId, item.categoryName, item.parentCategoryId))
      }
    })
  }
  addToCart(product){
    this.localStorageService.storeOnLocalStorage(product);
    alert('Item successfully added in cart');
  }
}
