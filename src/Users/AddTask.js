import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const AddTask = () => {
    const handleAddTask = (event) => {
        event.preventDefault();
        const taskName = event.target.taskName.value;
        const description = event.target.description.value;
        const tasks = { taskName, description };
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data);
                    event.target.reset();
                    toast.success('Task Added Successfully!')
                }
            })
    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card  w-96 bg-base-100 shadow-xl">
                    <h2 className='text-xl text-center'>Add Task</h2>
                    <div className="card-body items-center text-center">
                        <form onSubmit={handleAddTask}>
                            <input type="text" name='taskName' placeholder='Task Name' className=" mb-3 input input-bordered input-primary w-full max-w-xs" />
                            <input type="text" name='description' placeholder='Description' className=" mb-3 input input-bordered input-primary w-full max-w-xs" />
                            <button className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;