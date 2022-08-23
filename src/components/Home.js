import TaskCard from "./TaskCard"

function Home({ taskList, deleteTask}) {
    
    const taskItems = taskList.map(task => {
        return <TaskCard
            key = {task.id}
            task = {task}
            deleteTask = {deleteTask}
        />
        
    })

    return (
        <div>
            { taskItems }
        </div>
    )
}

export default Home