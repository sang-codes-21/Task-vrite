import React from 'react'
import {Link} from "react-router-dom"
const Task = () => {
return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='h-[500px] w-[300px] flex flex-col justify-center items-center bg-red-200 rounded-3xl shadow-lg space-y-4'>
            <Link to="/task1">
                <button className="w-40 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 ">Task 1</button>
            </Link>
            <Link to="/task2">
                <button className="w-40 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 ">Task 2</button>
            </Link>
            <Link to="/task3">
                <button className="w-40 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 ">Task 3</button>
            </Link>
            <Link to="/task4">
                <button className="w-40 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 ">Task 4</button>
            </Link>
        </div>
    </div>
)
}

export default Task

