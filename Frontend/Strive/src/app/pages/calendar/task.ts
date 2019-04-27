export class task {
	eventName: any;
    timeEvent: any;
    loc: any;
    checklist: any;
    t1: any;
    t2: any;
    t3: any;

	constructor(event:any, time:any, location:any, checklist:any, part1: any, part2: any, part3: any){
		this.eventName = event;
        this.timeEvent= time;
        this.loc = location;
        this.checklist = checklist;
        this.t1 = part1;
        this.t2 = part2;
        this.t3 =part3;
	}
}