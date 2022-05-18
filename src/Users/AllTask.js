import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import Task from './Task';

const AllTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const handleTaskDelete = (id) => {
        const url = `http://localhost:5000/task/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = tasks.filter(task => task._id !== id);
                setTasks(remaining);
                toast.success('Sucessfully Deleted !')
            })
    }

    if (!tasks.length > 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Task {tasks.length}</h2>
            <div className='grid lg:grid-cols-3 md gap-5 p-5'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                        handleTaskDelete={handleTaskDelete}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default AllTask;