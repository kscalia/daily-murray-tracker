import './Notes.css';

interface NotesProps {
    text: string;
    updateNotes: (parameter: string) => void;
}

export function Notes(props: NotesProps) {
    return (
        <div>
            <label htmlFor="notes">Notes: </label>
                <textarea 
                    id="notes"
                    value={props.text} 
                    onChange={(e) => props.updateNotes(e.target.value)}
                    rows={5} 
                    maxLength={1000}>
                </textarea>

        </div>
    );
}