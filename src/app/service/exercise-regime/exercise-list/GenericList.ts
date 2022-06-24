import { ExerciseList } from '../../../exercise/exercise-list';
import { Exercise }     from '../../../exercise/exercise';

export class GenericList implements ExerciseList {
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