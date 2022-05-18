import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="w-16 h-16 border-b-4 border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;