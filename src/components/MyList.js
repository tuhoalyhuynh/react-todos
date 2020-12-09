import React, { Component } from 'react';
import ListItem from './ListItem'

class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItemArray: this.props.theList,
            newToDoItem: ""
        }
    }

    clearList (e) {
        this.setState({
            toDoItemArray: []
        })
    }

    newItemChange = (evt) => {
        this.setState({
            newToDoItem: evt.target.value
        })
    }

    addItem = (evt) => {
        evt.preventDefault();
        const newArray = this.state.toDoItemArray
        newArray.push(this.state.newToDoItem)
        this.setState({ toDoItemArray: newArray })
    }

    render() {
        let toDoItems = this.state.toDoItemArray.map((pineapple, index) => {
            return <ListItem doThis={pineapple} key={index}/>
        })
        return (
            <div>
                <h1>Things I should stop procrastinating:</h1>
                <ul>
                    {toDoItems}
                </ul>
                <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
                <form>
                    <input type="text" placeholder="Type an item here" onChange={this.newItemChange}/>
                    <button onClick={this.addItem}>Add it!</button>
                </form>
            </div>
        )
    }
}

export default MyList