import { Exercise } from './exercise';

export interface WorkoutExercises {
    getId: () => string;
    setId: (id: string) => void;
    getList: () => Exercise[] | [];
    setList: (list: Exercise[] | []) => void;
}