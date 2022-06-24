import { WorkoutExercises } from '../../../contracts/workout/workout-exercises';
import { Exercise }         from '../../../contracts/workout/exercise';

export class GenericList implements WorkoutExercises {
    constructor(private id: string, private list: Exercise[] | []) {
    }
    
    public getId(): string {
        return this.id;
    }
    
    public setId(id: string): void {
        this.id = id;
    }
    
    public getList(): Exercise[] | [] {
        return this.list;
    }
    
    public setList(list: Exercise[] | []): void {
        this.list = list;
    }
}