export class task {
	eventName: any;
    timeEvent: any;
    loc: any;

	constructor(event:any, time:any, location:any){
		this.eventName = event;
        this.timeEvent= time;
        this.loc = location;
	}
}