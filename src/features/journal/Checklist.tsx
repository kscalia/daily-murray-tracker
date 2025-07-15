import type { ListItem } from "../../types/ListItem";
import ChecklistItem from "./ChecklistItem";
import './Checklist.css'

interface ChecklistProps {
  items: ListItem[];
  onItemChange: (id: number, checked: boolean) => void;
}

export default function Checklist(props: ChecklistProps) {
    const isChecked = (id: number) => props.items.find(f => f.id === id)?.checked ?? false;

    const handleItemChange = (id: number, checked: boolean) => {
      props.onItemChange(id, checked);
    }

    const itemList = props.items.map(m => (
      <li key={m.id}>
        <ChecklistItem
              id={m.id}
              text={m.text}
              checked={isChecked(m.id)}
              onChange={handleItemChange}
            />
      </li>
    ));

    return (
      <ul>
        {itemList}
      </ul>
    );
}