import React from 'react'



function TaskCard ({ task }) {


    return(
        <div className= 'card'>
            <div className="task-title">Title:{ task.title }</div>
            <p className="task-description">Description:{ task.description }</p>
            <p className="task-category">Category:{ task.category }</p>
           
        </div>
    );
}

export default TaskCard;