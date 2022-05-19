import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task = ({ task, handleTaskDelete }) => {
    const { _id, taskName, description } = task;

    const handleComplete = () => {
        toast.success('Task Completed successfully!');
        const crossLine = {
            textDecorationLine: 'line-through'
        }
    }

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{taskName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-4">
                        <button onClick={handleComplete} className="btn btn-primary">Complete</button>
                        <button onClick={() => handleTaskDelete(_id)} className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;