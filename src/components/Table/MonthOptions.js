import React  from 'react';
import moment from "moment";

const MonthOptions = () => {
    let months = moment.monthsShort()
    return months.map(month => (
        <option key={month} value={month}>{month}</option>
    ))
}

export default MonthOptions;
