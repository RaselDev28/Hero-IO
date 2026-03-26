import React from 'react';
import error from './image/error-404.png'

const Error = () => {
    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="flex flex-col items-center text-center">
        <img 
            className="mb-8 w-64 md:w-80" 
            src={error} 
            alt="Error 404" 
        />
        
        <div className="">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Oops, page not found!
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
                The page you are looking for is not available.
            </p>
        </div>
        <button 
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 text-white font-semibold text-lg rounded-xl my-5
                       bg-linear-to-r from-blue-600 via-purple-600 to-pink-500
                       hover:from-blue-700 hover:via-purple-700 hover:to-pink-600
                       transition-all duration-300 hover:shadow-2xl
                       active:scale-95"
        >
            Go Back!
        </button>
    </div>
</div>
    );
};

export default Error;