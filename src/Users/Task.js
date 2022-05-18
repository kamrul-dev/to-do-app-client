import React from 'react';

const Task = ({ task }) => {
    const { taskName, description } = task;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{taskName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-primary">Complete</button>
                        <button className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;