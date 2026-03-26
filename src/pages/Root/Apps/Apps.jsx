import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FiDownload } from "react-icons/fi";


const Apps = () => {
    const [apps, setApps] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/appData.json')
            .then(res => res.json())
            .then(data => {
                setApps(data.apps);
            });
    }, []);


    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-11/12 mx-auto py-10">


            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Our All Applications</h1>
                <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>


            <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">
                    Total Apps: {filteredApps.length}
                </h2>

                <input
                    type="text"
                    placeholder="Search apps..."
                    className="border px-4 py-2 rounded-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {filteredApps.length === 0 && (
                <p className="text-center text-red-500">No App Found</p>
            )}


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredApps.map(app => (
                    <div
                        key={app.id}
                        onClick={() => navigate(`/app/${app.id}`)}
                        className="border p-4 rounded-xl cursor-pointer hover:shadow-lg"
                    >
                        <img src={app.image} className="h-40 w-full object-cover rounded" />

                        <h3 className="font-bold mt-3">{app.title}</h3>

                        <div className='flex justify-between'>
                            <p className='flex items-center text-green-500 gap-1'><FiDownload />
                                {app.downloads}</p>
                            <p className='text-amber-400'>⭐ {app.ratingAvg}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apps;    