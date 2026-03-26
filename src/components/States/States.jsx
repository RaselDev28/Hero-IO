import React from 'react';

const States = () => {
    return (
        <div className="bg-primary py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                
                <h1 className="text-white font-bold text-center text-3xl md:text-4xl lg:text-5xl">
                    Trusted by Millions, Built for You
                </h1>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-1">
                    
                    <div className="text-center text-white">
                        <p className="text-gray-200 text-lg">Total Downloads</p>
                        <p className="text-5xl md:text-5xl font-bold mt-3">29.6M</p>
                        <p className="mt-2 text-sm md:text-base">
                            21% more than last month
                        </p>
                    </div>

                    <div className="text-center text-white">
                        <p className="text-gray-200 text-lg">Total Reviews</p>
                        <p className="text-5xl md:text-5xl font-bold mt-3">906K</p>
                        <p className=" mt-2 text-sm md:text-base">
                            46% more than last month
                        </p>
                    </div>

                    <div className="text-center text-white">
                        <p className="text-gray-200 text-lg">Active Apps</p>
                        <p className="text-5xl md:text-5xl font-bold mt-3">132+</p>
                        <p className="mt-2 text-sm md:text-base">
                            31 more will launch soon
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default States;