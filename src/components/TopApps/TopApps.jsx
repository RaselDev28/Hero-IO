import React, { useState, useEffect } from 'react';
import { FiDownload } from "react-icons/fi";

const TopApps = () => {
    const [topApps, setTopApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/appData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP Error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (data.apps && Array.isArray(data.apps)) {
                    const sorted = [...data.apps]
                        .sort((a, b) => b.downloads - a.downloads)
                        .slice(0, 8);

                    setTopApps(sorted);
                } else {
                    throw new Error("Invalid data format: 'apps' array not found");
                }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="py-16 text-center text-gray-500">Loading top apps...</div>;
    }

    if (error) {
        return (
            <div className="py-16 text-center text-red-600">
                <p>Error: {error}</p>
                <p className="text-sm mt-2">Make sure public/appData.json file exists and is correct.</p>
            </div>
        );
    }


    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <div className='text-center mx-auto'>
                        <h2 className="text-3xl md:text-4xl font-bold pb-5">Trending Apps</h2>
                        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {topApps.map((app) => (
                        <div
                            key={app.id}
                            onClick={() => window.location.href = `/app/${app.id}`}
                            className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl cursor-pointer transition-all hover:-translate-y-1"
                        >
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-44 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="font-semibold text-lg">{app.title}</h3>
                                <p className="text-gray-500 text-sm">{app.companyName}</p>

                                <div className="flex justify-between mt-4">
                                    <div className="text-right flex items-center gap-1 text-green-400 font-bold text-sm">
                                        <FiDownload />
                                        {(app.downloads / 1000000).toFixed(1)}M
                                    </div>
                                    <div className="flex items-center text-amber-400 gap-1">
                                        <span className="text-yellow-500 text-xl">★</span>
                                        <span className="font-bold">{app.ratingAvg}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => window.location.href = '/apps'}
                    className="btn btn-primary px-6 py-3 mx-auto items-center text-center justify-center flex mt-10 hover:bg-green-600"
                >
                    Show All
                </button>
            </div>

        </div>
    );
};

export default TopApps;