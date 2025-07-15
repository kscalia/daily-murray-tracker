// compare dates without time
export const areDatesEqual = (date1: Date, date2: Date) => date1.getDay() === date2.getDay() && 
    date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();