import React from "react"
import Task from "../tasks/Task"

export default function TasksList({ tasks, deleteTask , updateTask}) {
  return (
    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
        key={task.id}
        id={task.id}
        title={task.title}
        duration={task.duration}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />


      ))}
    </div>
  )
}

{
  /* {task.description}
        </Task> */
}
