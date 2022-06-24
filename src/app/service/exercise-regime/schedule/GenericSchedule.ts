import { Schedule } from '../../../contracts/workout/schedule';

export class GenericSchedule implements Schedule {
    constructor(public id: string, public interval: string) {
    }
}