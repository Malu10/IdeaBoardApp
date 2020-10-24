import React, {Component} from 'react';

import Idea from './Idea/Idea';
import Button from '../UI/Button/Button';

import './IdeaList.css';

class IdeaList extends Component {
    state = {
        items: [
            {id: 1, created_date: '11/12/19', title: '', body: 'Idea 1 details'},
            {id: 2, created_date: '10/12/19', title: 'Idea 2', body: 'Idea 2 details'},
            {id: 3, created_date: '12/12/19', title: 'Idea 3', body: 'Idea 3 details'}
        ]
    }

    inputChangeHandler = (event, id) => {
        console.log(event.target.value)
        const itemIndex = this.state.items.findIndex(p =>{
          return p.id === id;
        });
        const item = {
          ...this.state.items[itemIndex]
        }
        item.name = event.target.value;
        const items = [...this.state.items];
        items[itemIndex] = item;
        this.setState({
          items: items
        })
    }

    addIdeaHandler = (event, itemIndex) => {
        const items = [...this.state.items];
        items.push(itemIndex);
        console.log(itemIndex)
        console.log(items);
        this.setState({
            items: items
        })
    }

    render() {
        return (
            <div>
                <Button
                    value = "Add New Idea"
                    addIdeaHandler = {(event) => this.addIdeaHandler(event, this.state.items.id)}
                />
                <ul>
                    {this.state.items.map(item => {
                        return <Idea
                            key = {item.id}
                            items = {item}
                            inputChangeHandler = {this.inputChangeHandler}
                        />
                    })}
                </ul>
            </div>
        )
    }
}

export default IdeaList;