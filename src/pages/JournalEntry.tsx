import Checklist from "../features/journal/Checklist";
import DoodieCounter from "../features/journal/DoodieCounter";
import DatePicker from "../features/journal/DatePicker";
import { useState } from "react";
import type { Entry } from "../types/Entry";
import { areDatesEqual } from "../utils/dateCompare";
import { PresetItems } from "../types/ListItem";
import { Notes } from "../features/journal/Notes";

export default function JournalEntry() {
    const [entries, setEntries] = useState<Entry[]>([{date: new Date(), numDoodies: 0, items: [...PresetItems], notes: ''}]);
    const [currentDate, setCurrentDate] = useState(new Date);

    const currentEntry = () => entries.find(f => areDatesEqual(f.date, currentDate))!;

    // get the current entry, update the counter, save in all entries list
    function incrementDoodieCounter(increment: number) {
        setEntries((prev) => {
            return prev.map(m => {
                if (areDatesEqual(m.date, currentDate)) {
                    return {...m, numDoodies: m.numDoodies + increment};
                }

                return m;
            });
        });
    }

    // get the current entry, update the notes field, save in all entries list
    function updateEntryNotes(text: string) {
        setEntries((prev) => {
            return prev.map(m => {
                if (areDatesEqual(m.date, currentDate)) {
                    return {...m, notes: text};
                }
                
                return m;
            });
        })
    }

    // when the checkbox changes, update that item for the current entry
    function handleChecklistItemChange(id: number, checked: boolean) {
        setEntries((prev) => {
            return prev.map(entry => {
                // get the current entry
                if (areDatesEqual(entry.date, currentDate)) {
                    return {
                        ...entry,
                        // update the checked property for the item's id
                        items: entry.items.map(item => {
                            if (item.id === id) {
                                return {...item, checked: checked}
                            }

                            return item;
                        })
                    }
                }

                return entry;
            });
        })
    }

    // a new date was selected, create a new entry if one doesn't exist
    function getEntryByDate(date: Date) {
        // set the current date so we can look up the entry
        setCurrentDate(date);

        if (!entries.find(f => areDatesEqual(f.date, date))) {
            const newEntry = {date: date, numDoodies: 0, items: [...PresetItems], notes: ''};

            setEntries((prev) => {
                return [
                    newEntry,
                    ...prev
                ]
            });
        }
    }
    
    return (
        <>
            <DatePicker date={currentEntry().date} selectDate={getEntryByDate} />
            <Checklist items={currentEntry().items} onItemChange={handleChecklistItemChange} />
            <Notes text={currentEntry().notes} updateNotes={updateEntryNotes}></Notes>
            <DoodieCounter count={currentEntry().numDoodies} updateCount={incrementDoodieCounter} />
        </>
    )
}