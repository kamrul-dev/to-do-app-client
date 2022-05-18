import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card  w-96 bg-base-100 shadow-xl">
                <h2 className='text-xl text-center'>Welcome to "To Do App"</h2>
                <div className="card-body items-center text-center">
                    <input type="submit" value="Sign in with Google" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Login;