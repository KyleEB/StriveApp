export class task {
	eventName: any;
    timeEvent: any;
    loc: any;
    checklist: any;

	constructor(event:any, time:any, location:any, checklist:any){
		this.eventName = event;
        this.timeEvent= time;
        this.loc = location;
        this.checklist = checklist;
	}
}