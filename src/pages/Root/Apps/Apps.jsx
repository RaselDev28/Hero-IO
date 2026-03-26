import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FiDownload } from "react-icons/fi";

const Apps = () => {
    const [apps, setApps] = useState([]);
    const [search, setSearch] = useState('');
    const [sortType, setSortType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/appData.json')
            .then(res => res.json())
            .then(data => setApps(data.apps))
            .catch(err => console.error("Failed to load apps:", err));
    }, []);

    const filteredAndSortedApps = apps
        .filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sortType === "downloads") return b.downloads - a.downloads;
            if (sortType === "rating") return b.ratingAvg - a.ratingAvg;
            if (sortType === "name") return a.title.localeCompare(b.title);
            return 0;
        });

    return (
        <div className="w-11/12 mx-auto py-10">

            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Our All Applications</h1>
                <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Total Apps: {filteredAndSortedApps.length}</h2>

                <select
                    className="border py-2 rounded-lg"
                    onChange={e => setSortType(e.target.value)}
                    value={sortType}
                >
                    <option value="">Sort By</option>
                    <option value="downloads">Downloads</option>
                    <option value="rating">Rating</option>
                    <option value="name">Name (A-Z)</option>
                </select>

                <input
                    type="text"
                    placeholder="Search apps..."
                    className="border px-4 py-2 rounded-lg"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {filteredAndSortedApps.length === 0 && (
                <p className="text-center text-red-500">No App Found</p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredAndSortedApps.map(app => (
                    <div
                        key={app.id}
                        onClick={() => navigate(`/app/${app.id}`)}
                        className="border p-4 rounded-xl cursor-pointer hover:shadow-lg"
                    >
                        <img src={app.image} className="h-40 w-full object-cover rounded" alt={app.title} />
                        <h3 className="font-bold mt-3">{app.title}</h3>
                        <div className='flex justify-between'>
                            <p className='flex items-center text-green-500 gap-1'>
                                <FiDownload /> {app.downloads}
                            </p>
                            <p className='text-amber-400'>⭐ {app.ratingAvg}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apps;