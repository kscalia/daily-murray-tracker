export interface ListItem {
    id: number,
    text: string,
    checked: boolean
}

export const PresetItems: ListItem[] = [
    {id: 1, text: 'Morning walk', checked: false},
    {id: 2, text: 'Breakfast (include medicine)', checked: false},
    {id: 3, text: 'Afternoon walk', checked: false},
    {id: 4, text: 'Snack', checked: false},
    {id: 5, text: 'Kong', checked: false},
    {id: 6, text: 'Dinner', checked: false},
    {id: 7, text: 'Night walk', checked: false},
    {id: 8, text: 'Crazies', checked: false}
];