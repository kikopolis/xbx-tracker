export interface Exercise {
    getId: () => string;
    setId: (id: string) => void;
    getTitle: () => string;
    setTitle: (title: string) => void;
    getDescription: () => string;
    setDescription: (description: string) => void;
}