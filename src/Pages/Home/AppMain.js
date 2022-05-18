import React from 'react';
import NavBar from '../../Shared/NavBar';
import AddTask from '../../Users/AddTask';
import AllTask from '../../Users/AllTask';

const AppMain = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <AllTask></AllTask>
        </div>
    );
};

export default AppMain;