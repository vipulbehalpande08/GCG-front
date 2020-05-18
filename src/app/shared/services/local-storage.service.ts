import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { Product } from '../models/product.model';
const STORAGE_KEY = 'local_cart';
const STORAGE_KEY_PRICE = 'totalPrice';
@Injectable()
export class LocalStorageService{
    orderItems: Product[] = [];
    totalPrice : number;
    constructor(@Inject(LOCAL_STORAGE) private storage : StorageService){

    }
    public storeOnLocalStorage(product : Product): void{
        const currentOrderItems = this.storage.get(STORAGE_KEY) || [];
        currentOrderItems.push(product);
        this.totalPrice = Number(this.storage.get(STORAGE_KEY_PRICE))||0.00;
        this.totalPrice = this.totalPrice + product._price;
        this.storage.set(STORAGE_KEY_PRICE, this.totalPrice);
        this.storage.set(STORAGE_KEY, currentOrderItems);
        console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');
    }
    public getLocalStorage(): Product[]{
        return this.storage.get(STORAGE_KEY);
    }
    public removeItem(product){
        this.orderItems = this.storage.get(STORAGE_KEY);
        this.orderItems = this.orderItems.filter(obj=> obj !=product);
        this.storage.set(STORAGE_KEY, this.orderItems);
    }
    deleteItems(){
        this.storage.remove(STORAGE_KEY);
        this.storage.remove(STORAGE_KEY_PRICE);
    }
    getTotalPrice(){
        return this.storage.get(STORAGE_KEY_PRICE);
    }
}