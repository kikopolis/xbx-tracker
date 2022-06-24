import { Schedule } from '../../../contracts/workout/schedule';

export class GenericSchedule implements Schedule {
    constructor(private id: string, private interval: string) {
    }
    
    public getId(): string {
        return this.id;
    }
    
    public setId(id: string): void {
        this.id = id;
    }
    
    public getInterval(): string {
        return this.interval;
    }
    
    public setInterval(interval: string): void {
        this.interval = interval;
    }
    
}