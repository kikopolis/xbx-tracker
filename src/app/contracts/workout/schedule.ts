export interface Schedule {
    getId: () => string;
    setId: (id: string) => void;
    getInterval: () => string;
    setInterval: (interval: string) => void;
}