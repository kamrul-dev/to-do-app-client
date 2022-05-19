import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import Task from './Task';

const AllTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://still-woodland-89709.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const handleTaskDelete = (id) => {
        const url = `https://still-woodland-89709.herokuapp.com/task/${id}`;
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

    const handleComplete = () => {
        // get the post by id and set the class
        toast.success('Task Completed successfully!')
    }

    if (!tasks.length > 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-xl font-bold text-center mt-5'>Total Task: {tasks.length}</h2>
            <div className='grid lg:grid-cols-3 md gap-5 p-5'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                        handleTaskDelete={handleTaskDelete}
                        handleComplete={handleComplete}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default AllTask;