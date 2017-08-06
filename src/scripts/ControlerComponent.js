import React from 'react';
import PropTypes from 'prop-types';

class ControlerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: initialArray,
            newItem: '',
            search: ''
        };
        this.clear = this.clear.bind(this);
        this.reset = this.reset.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    clear() {
        this.setState({items: new Array()});
    }

    reset() {
        this.setState({
            items: initialArray
        })
    }

    deleteItem(number, event) {
        let cloneState = this.state.items.slice();
        cloneState.splice(number, 1);
        this.setState({items: cloneState});
    }


    render() {
        return (
            <div><h1>sdlkgbalgbl</h1></div>
        )
    }
}


export default ControlerComponent;

//
// class ListComponent extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.list = ['Sri Lanka', 'Japan', 'America', 'Australia', 'Canada', 'Russia'];
//         this.state = {
//             searchString: "",
//             data: this.list
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(e) {
//         this.setState({
//             searchString: e.target.value,
//             data: this.filterList(e.target.value, this.list)
//         })
//     }
//     filterList(str, data) {
//         return data.filter(element => element.toLowerCase().match(str));
//     }
//
//     render() {
//         return (
//             <div className="page-header">
//                 <h1>{this.props.text}</h1>
//                 <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here"/>
//                 <ul>{ this.state.data.map( (item, k)=>
//                        <li key={k}>{item}</li>
//                     ) }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// ListComponent.defaultProps = {
//     text: 'Filter Place'
// };
// ListComponent.propTypes = {
//     text: PropTypes.string.isRequired
// };
//
// export default ListComponent;