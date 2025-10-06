import React from 'react'
import './index.css'; 
import Task2 from './tasklist/Task2.jsx'
import Task1 from './tasklist/Task1.jsx'
import Task3 from './tasklist/Task3.jsx'
import Task4 from './tasklist/Task4.jsx'
import Task from './tasklist/Task.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const App = () => {
   const router = createBrowserRouter([
  
   
      { path: "/", element: <Task/> },     
      { path: "/task1", element: <Task1 /> },
      { path: "/task2", element: <Task2 /> },
      { path: "/task3", element: <Task3 /> },
      { path: "/task4", element: <Task4 /> },
    ],
  
);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
