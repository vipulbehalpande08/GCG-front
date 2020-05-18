export class User{
    
    constructor(private userId : number,
        private firstName : string,
        private lastName : string,
        private emailId : string,
        private password : string,
        private contact : string,
        private street : string,
        private area : string,
        private city: string,
        private region: string,
        private country: string,
        private pin: string,
        private isActive :string,
        private description : string,
        private userType : string
        ){}
        get _userId(): number {
            return this.userId;
        }
        set _userId(userId: number) {
            this.userId = userId;
        }
		get _firstName(): string{
			return this.firstName;
	    }
	    set _firstName(firstName: string){
			this.firstName;
	    }
	    get _lastName(): string{
			return this.lastName;
	    }
	    set _lastName(lastName: string){
			this.lastName;
	    }
	    get _emailId(): string{
			return this.emailId;
	    }
	    set _emailId(emailId: string){
			this.emailId;
	    }
		get _password(): string{
			return this.password;
	    }
	    set _password(password: string){
			this.password;
	    }
		get _contact(): string{
			return this.contact;
		}
		set _contact(contact: string){
			this.contact;
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
		get _isActive(): string{
			return this.isActive;
		}
		set _isActive(isActive: string){
			this.isActive;
		}
		get _description(): string{
			return this.description;
		}
		set _description(description: string){
			this.description;
		}
		get _userType(): string{
			return this.userType;
		}
		set _userType(userType: string){
			this.userType;
		}
}
