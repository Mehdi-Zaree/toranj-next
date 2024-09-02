import React from 'react';

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className={"h-screen fixed top-0 left-0 bg-white overflow-hidden w-screen flex justify-center items-center"}>
            {children}
        </div>
    );
}

export default Layout;