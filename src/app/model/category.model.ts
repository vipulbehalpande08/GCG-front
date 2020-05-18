export class Category{
    categoryId : number;
    categoryName : string;
    parentCategoryId : number;

    // constructor(categoryId : number, categoryName : string, parentCategoryId : number){
    //     this.categoryId = categoryId;
    //     this.categoryName = categoryName;
    //     this.parentCategoryId = parentCategoryId;
    // }
    constructor(categoryName : string, parentCategoryId : number){
        this.categoryName = categoryName;
        this.parentCategoryId = parentCategoryId;
    }
    
}
