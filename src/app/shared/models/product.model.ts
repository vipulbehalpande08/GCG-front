export class Product{
    
    constructor(
        private productId: number,
        private productName : string,
        private description : string,
        private price: number,
        private availableStock :number,
        private ownerId : number,
        private categoryId : number){
		
    }
    get _ownerId():number{
        return this.ownerId;
    }
    set _ownerId(ownerId : number){
        this.ownerId = ownerId;
    }
	get _productId(): number {
        return this.productId;
    }
    set _productId(productId: number) {
        this.productId = productId;
    }
	get _productName(): string {
        return this.productName;
    }
    set _productName(productName: string) {
        this.productName = productName;
    }
	get _description(): string {
        return this.description;
    }
    set _description(description: string) {
        this.description = description;
    }
	get _price(): number {
        return this.price;
    }
    set _price(price: number) {
        this.price = price;
    }
	get _availablestock(): number {
        return this.availableStock;
    }
    set _availablestock(availableStock: number) {
        this.availableStock = availableStock;
    }
	get _categoryId() : number{
        return this.categoryId;
    }
    set _categoryId(categoryId : number){
        this.categoryId = categoryId;
    }
}