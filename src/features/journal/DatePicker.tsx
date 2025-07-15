import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
    date: Date;
    selectDate: (param: Date) => void;
}

export default function DatePicker(props: DatePickerProps) {
    return <ReactDatePicker selected={props.date} onChange={(date) => props.selectDate(date!)} />;
}