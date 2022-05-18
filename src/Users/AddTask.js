import React from 'react';

const AddTask = () => {
    return (
        <div>
            <h2 className=''>All Tasks</h2>
            <div className='flex justify-center items-center h-screen'>
                <div className="card  w-96 bg-base-100 shadow-xl">
                    <h2 className='text-xl text-center'>Add Task</h2>
                    <div className="card-body items-center text-center">
                        <input type="text" placeholder='Task Name' className=" mb-3 input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder='Description' className=" mb-3 input input-bordered input-primary w-full max-w-xs" />
                        <div className="card-actions">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;