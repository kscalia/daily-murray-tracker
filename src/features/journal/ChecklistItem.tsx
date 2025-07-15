interface ChecklistItemProps {
    id: number;
    checked: boolean;
    text: string;
    onChange: (id: number, checked: boolean) => void;
}

export default function ChecklistItem(props: ChecklistItemProps) {
    return (
        <>
            <input
                type="checkbox"
                id={props.id.toString()}
                name={props.text}
                checked={props.checked}
                onChange={(e) => props.onChange(props.id, e.target.checked)}
            />
            <label htmlFor={props.id.toString()}>{props.text}</label>
        </>
    );
}