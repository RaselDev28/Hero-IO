import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FiDownload } from 'react-icons/fi';

const MyInstallations = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [displayApps, setDisplayApps] = useState([]);

    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(savedApps);
        setDisplayApps(savedApps);
    }, []);

    const handleSort = (e) => {
        const sortBy = e.target.value;
        let sortedApps = [...installedApps];

        if (sortBy === "size") {
            sortedApps.sort((a, b) => b.size - a.size);
        } else if (sortBy === "rating") {
            sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        } else {
            sortedApps = [...installedApps];
        }

        setDisplayApps(sortedApps);
    };

    const handleUninstall = (id, title) => {
        const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updatedApps = savedApps.filter(app => app.id !== id);

        localStorage.setItem('installedApps', JSON.stringify(updatedApps));

        setInstalledApps(updatedApps);
        setDisplayApps(updatedApps);

        toast.error(`${title} uninstalled successfully!`);
    };

    return (
        <div className="w-full bg-gray-50 py-10 px-4 font-sans">
            <div className="max-w-6xl mx-auto">


                <div className="text-center mb-12 p-8">
                    <h1 className="text-5xl font-black text-[#001f3f] mb-4 uppercase tracking-tight">
                        Your Installed Apps
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4 px-2">
                    <h2 className="text-2xl font-bold text-[#001f3f]">
                        {displayApps.length} Apps Found
                    </h2>

                    <div className="flex items-center gap-2">
                        <select
                            onChange={handleSort}
                            className="border border-gray-300 rounded px-4 py-2 text-gray-600 bg-white outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
                        >
                            <option value="default">Sort By Default</option>
                            <option value="size">Sort By Size</option>
                            <option value="rating">Sort By Rating</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-blue-200 p-4 rounded-lg">
                    {displayApps.length > 0 ? (
                        displayApps.map((app) => (
                            <div
                                key={app.id}
                                className="bg-white flex items-center justify-between p-5 rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="flex items-center gap-6">

                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-20 h-20 rounded-2xl object-cover bg-gray-100"
                                    />

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl font-bold text-gray-800">{app.title}</h3>
                                        <div className="flex items-center gap-4 text-gray-500 font-medium">
                                            <span className="flex items-center gap-1 text-[#00d084]">
                                                <FiDownload /> {(app.downloads / 1000000).toFixed(0)}M
                                            </span>
                                            <span className="flex items-center gap-1 text-orange-500">
                                                ⭐ {app.ratingAvg}
                                            </span>
                                            <span className="text-gray-400">
                                                {app.size} MB
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id, app.title)}
                                    className="bg-[#00d084] hover:bg-emerald-500 text-white sm:px-8 px-4 py-2.5 rounded-lg font-bold transition-colors shadow-sm active:scale-95"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-400 italic">
                            No apps found in your installation list.
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default MyInstallations;