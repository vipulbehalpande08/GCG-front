import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Product } from 'src/app/shared/models/product.model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderItems : Product[] = [];
  artists : User[] = [];
  totalPrice : number = 0.00;
  checkout : boolean = true;
  constructor(private localStorageService : LocalStorageService,
    private userService : UserService) { }

  ngOnInit(): void {
    this.orderItems = this.localStorageService.getLocalStorage() || [];
    this.artists = this.userService.getUsersByUserType('ARTIST');
    this.totalPrice = Number(this.localStorageService.getTotalPrice())|| 0.00;
    this.orderItems.forEach(product => {
      console.log(product._productId);
    });
  }
  removeItem(product: Product){
    this.localStorageService.deleteItems();
    alert('Item removed successfully');
    
    // console.log(product ,' to be deleted');
    // this.localStorageService.removeItem(product);
    this.orderItems = [];
    this.orderItems = this.localStorageService.getLocalStorage().filter(obj=>obj !=product) || [];
  }
  proceedToBuy(){
    this.checkout = !this.checkout;
  }
}
