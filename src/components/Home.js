import TaskCard from "./TaskCard"

function Home({ taskList }) {
    const {tasks} = taskList

    
    const taskItems = tasks.map(task => {
        return <TaskCard
            key = {task.id}
            task = {task}
        />
        
    })

    return (
        <div>
            { taskItems }
        </div>
    )
}

export default Home