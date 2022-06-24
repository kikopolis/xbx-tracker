import { Exercise } from './exercise';

export interface ExerciseList {
    getId: () => string;
    setId: (id: string) => void;
    getList: () => Exercise[] | [];
    setList: (list: Exercise[] | []) => void;
}