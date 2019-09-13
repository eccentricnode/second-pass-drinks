export interface Drink {
    id: number;
    name: string;
    caffeine: number;
    sugar: number;
    founder: string;
}

export const emptyDrink = {
    id: null,
    name: '',
    caffeine: null,
    sugar: null,
    founder: ''
}
