import { faPoo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface DoodieCounterProps {
    count: number;
    updateCount: (increment: number) => void;
}

export default function DoodieCounter(props: DoodieCounterProps) {
    const isDisabled = () => props.count == 0;

    return (
        <>
            <button onClick={() => props.updateCount(-1)} disabled={isDisabled()}>-</button>
            <FontAwesomeIcon icon={faPoo} />
            <span>({props.count})</span>
            <button onClick={() => props.updateCount(1)}>+</button>
        </>
    );
}