import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TaskItems extends Component {
    render()
    {
        var taskEntries = this.props.entries;
        var listItems = taskEntries.map(this.createTasks); 

        return(
            <ul className="list">
            <FlipMove duration={250} easing="ease-out">
                {listItems}      
            </FlipMove>
            
            </ul>
        );
    }


    constructor(props)
    {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }


    createTasks(item) 
    {
        return <div>
                    <li>
                        {item.text}   
                    </li>
                    <i className="material-icons" onClick={() => this.removeTask(item.key)} key={item.key}>clear</i>
               </div>
    }


    removeTask(key)
    {
        this.props.removeTask(key);
    }
}

export default TaskItems;