import React from "react"
import "./App.css"


import Hello from "./Component/hello/Hello"
import TaskPage from "./pages/TaskPage"

function App() {
  return (
    <div className="app">
      <Hello />
      <TaskPage/>
    </div>
  )
}

export default App
