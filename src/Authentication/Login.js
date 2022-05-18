import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>
    }

    let errorShow;
    if (error) {
        errorShow = <p>{error?.message}</p>
    }

    if (user) {
        navigate('/appMain');
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card  w-96 bg-base-100 shadow-xl">
                <h2 className='text-xl text-center'>Welcome to "To Do App"</h2>
                <div className="card-body items-center text-center">
                    <input onClick={() => signInWithGoogle()} type="submit" value="Sign in with Google" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                {errorShow}
            </div>
        </div>
    );
};

export default Login;