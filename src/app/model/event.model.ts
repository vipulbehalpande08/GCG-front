export class Event {
    eventId: number;
    eventName : string;
    description : string;
    artistId: string;
    price: number;
    isPaid: string;
    startDate: Date;
    endDate: Date;
    venueId: number;
    categoryId: number;
    
    
    // constructor(eventName : string, 
    //     description: string, artistId: string, price: number,
    //     isPaid : string, startDate : Date, endDate : Date,
    //     venueId : number, categoryId : number){

    // }
    // get EventId() : number{
    //     return this.eventId;
    // }
    // set EventId(value : number){
    //     this.eventId = value;
    // }
    // get EventName(): string{
    //     return this.eventName;
    // }
    // set EventName(eventName : string){
    //     this.eventName = eventName;
    // }
    toString(){
        return "[ eventName"+this.eventName+"]";
    }
}



