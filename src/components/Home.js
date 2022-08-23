import React, { useEffect, useState } from 'react';
import TaskCard from "./TaskCard"

function Home() {

    useEffect(() => {
        fetch("http://localhost:9292/users/1")
            .then(resp => resp.json())
            .then(data => setUserObj(data))
    }, [])

    const [userObj, setUserObj] = useState()

    // const tasks = userObj.tasks
    // console.log("tasks austin",tasks)

    const taskItems = userObj.map(user => user.tasks.map( task => {
        return <TaskCard
            key={task.id}
            task={task}
        />
    })
)
    
    return (
        <div>
            {taskItems}

        </div>
    )
}

export default Home