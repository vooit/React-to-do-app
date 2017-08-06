/**
 * Created by Wojtek on 2017-08-07.
 */

import React, { Component } from 'react'
// Destructuring instead =>  import React from 'react' && class AppItems extends React.Component {
class AppItems extends Component {
    // handleClick {
    //
    // }
    render(props) {
        let items = this.props.items;
        let search = this.props.search;

        if (search.length > 0) {
            items = items.filter(function(item) {
                return item.toLowerCase().match(search);
            });
        }
        let tableHeader =
            <tr className="tableHead">
                <th className="taskNumber">#</th>
                <th className="taskItem">Task</th>
                <th>(X)</th>
            </tr>;

        if (items.length === 0) {
            tableHeader = '';
        }

        let list = items.map(function(item, index) {
            return <tr>
                <td className="taskNumber">Task {index + 1}:</td>
                <td className="taskItem" key={index}>{item}</td>
                <td>
                    <button
                        className="remove"
                        onClick={this.props.deleteItem.bind(this, index)}>X</button>
                </td>
            </tr>}.bind(this));
        return (
            <table className="taskTable">
                {tableHeader}
                {list}
            </table>
        )
    }
}


export default AppItems;