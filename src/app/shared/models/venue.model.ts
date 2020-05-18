export class Venue{
    constructor( private venueId : number,
        private venueName: string,
        private description : string,
        private street : string,
        private area : string,
        private city : string,
        private region :string,
        private country : string,
        private pin :string,
        private isAvailable : string,
        private galleryPath : string,
        private fromDate : Date ,
        private toDate : Date,
        private isStall : string,
        private availableStalls : number,
        private emailId : string,
        private contact : string){}
		
		get _venueId() : number{
			return this.venueId;
		}
		set _venueId(venueId : number){
			this.venueId = venueId;
		}
		get _venueName(): string{
			return this.venueName;
		}
		set _venueName(venueName: string){
			this.venueName;
		}
		get _description(): string{
			return this.description;
		}
		set _description(description: string){
			this.description;
		}
		get _street(): string{
			return this.street;
		}
		set _street(street: string){
			this.street;
		}
		get _area(): string{
			return this.area;
		}
		set _area(area: string){
			this.area;
		}
		get _city(): string{
			return this.city;
		}
		set _city(city: string){
			this.city;
		}
		get _region(): string{
			return this.region;
		}
		set _region(region: string){
			this.region;
		}
		get _country(): string{
			return this.country;
		}
		set _country(country: string){
			this.country;
		}
		get _pin(): string{
			return this.pin;
		}
		set _pin(pin: string){
			this.pin;
		}
		get _isAvailable(): string{
			return this.isAvailable;
		}
		set _isAvailable(isAvailable: string){
			this.isAvailable;
		}
		get _galleryPath(): string{
			return this.galleryPath;
		}
		set _galleryPath(galleryPath: string){
			this.galleryPath;
		}
		get _fromDate(): Date{
			return this.fromDate;
		}
		set _fromDate(fromDate: Date){
			this.fromDate;
		}
		get _toDate(): Date{
			return this.toDate;
		}
		set _toDate(toDate: Date){
			this.toDate;
		}
		get _isStall(): string{
			return this.isStall;
		}
		set _isStall(isStall: string){
			this.isStall;
		}
		get _avaiableStalls(): number{
			return this.availableStalls;
		}
		set _avaiableStalls(availableStalls: number){
			this.availableStalls;
		}
		get _emailId(): string{
			return this.emailId;
		}
		set _emailId(emailId: string){
			this.emailId;
		}
		get _contact(): string{
			return this.contact;
		}
		set _contact(contact: string){
			this.contact;
		}
}