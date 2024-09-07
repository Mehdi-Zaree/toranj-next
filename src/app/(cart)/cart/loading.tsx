import React from 'react';

function Loading() {
    return (
        <div className="fixed top-0 bg-white left-0 h-screen  w-screen flex items-center justify-center">
            <div className="loader"></div>
        </div>
    );
}

export default Loading;