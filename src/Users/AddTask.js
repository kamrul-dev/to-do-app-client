import React from 'react';

const AddTask = () => {
    const handleAddTask = () => {

    }
    return (
        <div>
            <h2 className=''>All Tasks</h2>
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