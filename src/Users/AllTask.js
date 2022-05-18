import React, { useEffect, useState } from 'react';
import Task from './Task';

const AllTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h2>All Task {tasks.length}</h2>
            <div className='grid lg:grid-cols-3 md gap-5 p-5'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default AllTask;