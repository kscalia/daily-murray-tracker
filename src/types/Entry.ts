import type { ListItem } from "./ListItem";

export interface Entry {
    date: Date;
    items: ListItem[];
    numDoodies: number;
    notes: string;
}