import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch('/appData.json')
      .then(res => res.json())
      .then(data => {
        const found = data.apps.find(a => a.id == id);
        setApp(found);
      });
  }, [id]);

  if (!app) return <p className="text-center">Loading...</p>;

  return (
    <div className="w-11/12 mx-auto py-10">
      <img src={app.image} className="w-full max-w-md mx-auto" />

      <h1 className="text-3xl font-bold text-center mt-5">
        {app.title}
      </h1>

      <p className="text-center text-gray-500">
        {app.companyName}
      </p>

      <div className="text-center mt-4">
        <p>⬇ Downloads: {app.downloads}</p>
        <p>⭐ Rating: {app.ratingAvg}</p>
      </div>
    </div>
  );
};

export default AppDetails;