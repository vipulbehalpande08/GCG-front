import { Deserializable } from './deserializable.model';

export class Category{
    
    constructor(
      private categoryId : number,
      private categoryName : string,
      private  parentCategoryId : number){}
    // deserialize(input : any){
    //     Object.assign(this, input);
    //     return this;
    // }
    get _categoryId():number{
      return this.categoryId;
    }
    set _categoryId(categoryId : number){
      this._categoryId = categoryId;
    }
    get _categoryName(): string{
      return this.categoryName;
    }
    set _categoryName(categoryName : string){
      this.categoryName = categoryName;
    }
    get _parentCategoryId(): number{
      return this.parentCategoryId; 
    }
    set _parentCategoryId(pId : number){
      this.parentCategoryId = pId;
    }
}