import React from "react"
import TaskCard from "./TaskCard"

function Home({ taskList }) {

    const taskItems = taskList.map(task =>{
        return <TaskCard
        key = { task.id }
        task = { task }
        />
    })

    return (
        <div>
            { taskItems }

        </div>
    )
}

export default Home