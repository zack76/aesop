import React, { Component } from 'react';
import moment from 'moment'
import { INCOME, EXPENSE } from "../../constant";
import TableRow from "./TableRow"
import MonthOptions from "./MonthOptions"

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: this.props.bills
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.bills !== this.props.bills) {
            this.setState({
                bills: this.props.bills
            })
            return true;
        }
    }

    selectMonth = (event) => {
        let { bills } = this.props
        if (bills && bills.length > 0 && event.target.value && event.target.value !== '') {
            this.setState({
                bills: bills.filter((bill) => {
                    return moment(bill.billTime).format('MMM') === event.target.value;
                })
            })
        } else {
            this.setState({
                bills: bills
            })
        }
    }

    getTotalAmount = (type) => {
        const { bills } = this.state
        let totalBills = bills.filter((bill) => {
            return bill.billType === type
        })
        let amount = 0;
        if (totalBills && totalBills.length > 0) {
            totalBills.forEach(bill => {
                amount += Number(bill.billAmount.substring(1));
            })
        }
        return '$' + amount;
    }


    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Select list:</label>
                    <select className="form-control" onChange={(event)=>this.selectMonth(event)} defaultValue={''}>
                        <option value={''}></option>
                        <MonthOptions />
                    </select>
                </div>
                <ul className="list-group col-xs-12">
                    <div className="container">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Bill Time</th>
                                <th>Bill Type</th>
                                <th>Bill Category</th>
                                <th>Bill Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <TableRow bills={this.state.bills}/>
                            <tr className="table-primary">
                                <td><strong>Income: </strong></td>
                                <td>{this.getTotalAmount(INCOME)}</td>
                                <td><strong>Expense: </strong></td>
                                <td>{this.getTotalAmount(EXPENSE)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </ul>
            </div>
        );
    }
}


export default Table;
