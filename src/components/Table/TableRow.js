import React  from 'react';

const TableRow = ({ bills }) => {
    return (
        bills.map( bill => (
            <tr key={bill.billTime}>
                <td>{bill.billTime}</td>
                <td>{bill.billType}</td>
                <td>{bill.billCategory}</td>
                <td>{bill.billAmount}</td>
            </tr>
        ))
    )
}

export default TableRow;
