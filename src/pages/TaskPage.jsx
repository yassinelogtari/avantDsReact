import React, { useState } from "react"
import TaskForm from "../Component/taskform/TaskForm"
import TasksList from "../Component/tasksList/TasksList"



function TaskPage() {

  const loading = false
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn html",
      duration: 60,
    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
    },
  ])

  const addTask = (title, duration) => {
    setTasks([...tasks, { id: tasks.length+1, title, duration }])
  }


  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const updateTask = (id, title, duration) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, title, duration } : task
    )
    setTasks(newTasks)
  }


  return (
    <div className="tasks-list">
      <TaskForm addTask={addTask} />
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <TasksList tasks={tasks} deleteTask={deleteTask}  updateTask={updateTask} />

        </>
      )}
    </div>
  )

   //5edma bil services


   // import {
//   fetchTasks,
//   fetchTasksByFilter,
//   addTask as addTaskFromService,
//   deleteTask as deleteTaskFromService,
//   updateTask as updateTaskFromService,
// } from "../services/tasks.service"



//   const [loading, setLoading] = useState(false)
//   const [tasks, setTasks] = useState([])

//   const [searchValue, setSearchValue] = useState("")

//   const [isVisible, setIsVisible] = useState(true)
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible)
//   }
//   // 2ème forme de useEffect
//     useEffect(() => {
//       const fetchData = async () => {
//         setLoading(true)
//         try {
//           const result = await fetchTasks()
//           setTasks(result)
//           setLoading(false)
//         } catch (e) {
//           console.log("error")
//           setLoading(false)
//         }
//       }
//       console.log("useEffect")
//       fetchData()
//     }, [])

//   // 3ème forme de useEffect
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setLoading(true)
//   //     if (searchValue.length === 0) {
//   //       console.log("tasks empty")
//   //       setTasks([])
//   //       setLoading(false)
//   //     } else {
//   //       const result = await fetchTasksByFilter(searchValue)
//   //       console.log("tasks form api")
//   //       setTasks(result)
//   //       setLoading(false)
//   //     }
//   //   }
//   //   console.log("searchValue", searchValue)
//   //   fetchData()
//   // }, [searchValue])

//   // 4ème forme de useEffect
//   // useEffect(() => {
//   //   let didCancel = false
//   //   const fetchData = async () => {
//   //     setLoading(true)
//   //     if (!searchValue) {
//   //       setTasks([])
//   //       setLoading(false)
//   //     } else {
//   //       const result = await fetchTasks(searchValue)
//   //       console.log("result: ", didCancel)
//   //       if (!didCancel) {
//   //         setTasks(result)
//   //         setLoading(false)
//   //       }
//   //     }
//   //   }
//   //   // console.log("useEffect:", searchValue)
//   //   fetchData()

//   //   return () => {
//   //     console.log("cleanup: ", searchValue)
//   //     didCancel = true
//   //   }
//   // }, [searchValue])

//  const addTask = async (title, duration) => {
//    try {
//      setLoading(true)
//      const newTask = await addTaskFromService({
//        title,
//        duration,
//      })
//      setTasks([...tasks, newTask])
//      setLoading(false)
//    } catch (e) {
//      console.log("error")
//    }
//  }
//  const deleteTask = async (id) => {
//    try {
//      setLoading(true)
//      await deleteTaskFromService(id)
//      const newTasks = tasks.filter((task) => task.id !== id)
//      setTasks(newTasks)
//      setLoading(false)
//    } catch (e) {
//      console.log("error")
//    }
//  }

//  const updateTask = async (id, title, duration) => {
//    try {
//      setLoading(true)
//      const newTask = await updateTaskFromService(id, {
//        title,
//        duration,
//      })
//      const newTasks = tasks.map((task) => (task.id === id ? newTask : task))
//      setTasks(newTasks)
//      setLoading(false)
//    } catch (e) {
//      console.log("error")
//    }
//  }
//   return (
//     <div className="app">
//       <div className="toggle">
//         <button onClick={toggleVisibility}>Toggle visibility</button>
//       </div>
//       <div>
//         <div>
//           <TaskForm addTask={addTask} />
//           <div className="search">
//             <input
//               type="search"
//               name="search"
//               placeholder="search task by name"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//             />
//           </div>
//           {loading && <div>Loading ... </div>}
//           {!loading && isVisible && (
//             <TasksList
//               tasks={tasks}
//               deleteTask={deleteTask}
//               updateTask={updateTask}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   )
}

export default TaskPage