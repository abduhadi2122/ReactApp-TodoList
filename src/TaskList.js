import React, { Component } from "react";
import TaskItems from "./TaskItems";
import"./TaskList.css";

class TaskList extends Component
{
    render()
    {
        return(
            <div className="task-list-main">
                <div className="header">
                    <form onSubmit={this.addItem}> 
                        <input ref={(a) => this._inputElement =a} 
                            placeholder="Enter Task">
                        </input>
                        <button type="submit">Add</button> 
                    </form>    
                </div>
                <TaskItems entries={this.state.items}
                           removeTask={this.removeItem}/>
            </div>
        );
    }

    constructor(props)
    {
        super(props);

        this.state={
            items:[]
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem  = this.removeItem.bind(this);
    }

    addItem(e)
    {
        if (this._inputElement.value !=="")
        {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";
        console.log(this.state.items);

        e.preventDefault();
    }

    removeItem(key)
    {
        var filteredItems = this.state.items.filter(function (item) 
        {
            return(item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }


}

export default TaskList;