
export class Event{
    constructor(
        private eventId: number,
        private eventName : string,
        private description: string,
        private artistId : string,
        private price : number,
        private isPaid : string,
        private startDate : Date,
        private endDate : Date,
        private venueId : number,
        private galleryPath : string,
        private categoryId : number){
        
    }
    get _eventId(): number {
        return this.eventId;
    }
    set _eventId(eventId: number) {
        this.eventId = eventId;
    }
    get _eventName() : string{
        return this.eventName;
    }
    set _eventName(name : string){
        this.eventName = name;
    }
    get _description(): string {
        return this.description;
    }
    set _description(description: string) {
        this.description = description;
    }
    get _artistIds() : string{
        return this.artistId;
    }
    set _artistIds(artists : string){
        this.artistId = artists;
    }
    get _startDate(): Date {
        return this.startDate;
    }
    set _startDate(startDate: Date) {
        this.startDate = startDate;
    }
    get _endDate() : Date{
        return this.endDate;
    }
    set _endDate(endDate : Date){
        this.endDate = endDate;
    }
    get _venueId(): number {
        return this.venueId;
    }
    set _venueId(venueId: number) {
        this.venueId = venueId;
    }
    get _galleryPath() : string{
        return this.galleryPath;
    }
    set _galleryPath(galleryPath : string){
        this.galleryPath = galleryPath;
    } 
    get _categoryId() : number{
        return this.categoryId;
    }
    set _categoryId(categoryId : number){
        this.categoryId = categoryId;
    } 
}