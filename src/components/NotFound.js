import React from 'react'

function NotFound() {
    return (
        <div className='h-[100vh] flex justify-center items-center bg-white'>
            <div className='flex flex-col items-center'>
                <h2>Where are you looking for?</h2>
                <h1 className='font-bold text-2xl lg:text-9xl'>404</h1>
                <p>Page Not Found</p>
            </div>
        </div>
    )
}

export default NotFound