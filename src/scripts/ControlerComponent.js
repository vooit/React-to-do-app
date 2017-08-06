import React from 'react';
import PropTypes from 'prop-types';
import AppItems from './AppItems';


class ControlerComponent extends React.Component {
    constructor(props) {
        super(props);


        let initialArray = ["Start Redux Tutorials", "Learn more about React states and keys", "Build some React apps", "Acqueint with LifeCycle", "Learn handling JSON", "Tweet Progress", "Chill!", "Learn more about React Native"];

        this.state = {
            items: initialArray,
            newItem: '',
            search: ''
        };
        this.clear = this.clear.bind(this);
        this.reset = this.reset.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        //Metoda slice(od, do) zwraca nową tablicę zawierającą wycięte elementy z tablicy na której została wywołana.
        let cloneState = this.state.items.slice();
        // wycina element => modyfikuje tablicę na której jest wywoływana.
        cloneState.splice(number, 1);
        this.setState({items: cloneState});
    }

    searchQuery(event) {
        //get value from input
        this.setState({search: event.target.value})
    }

    handleSearch(event) {
        event.preventDefault();
        //filter string
        let searchStr = this.state.search.trim().toLowerCase();
    }

    handleChange(event) {
        //get input value to add to list
        this.setState({newItem: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.newItem.length > 0) {
            //add new val to array uding push method
            this.state.items.push(this.state.newItem);
            //clear input
            this.setState({newItem: ''});
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="newTask"
                           type="text"
                           placeholder="add new task"
                           onChange={this.handleChange}
                           value={this.state.newItem}
                    />
                    <button className="enter">Enter task</button>
                </form>
                <form className="" onSubmit={this.handleSearch}>
                    <input className="search"
                           type="text"
                           placeholder="search task"
                           onChange={this.searchQuery}
                           value={this.state.search}/>
                </form>
                {/*<AppItems items={this.state.items}*/}
                          {/*search={this.state.search}*/}
                          {/*deleteItem={this.deleteItem}/>*/}
                <button className="clear" onClick={this.clear}>Clear the List</button>
                <button className="reset" onClick={this.reset}>Reset the List</button>
            </div>
        )
    }
}


export default ControlerComponent;