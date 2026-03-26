import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FiDownload } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch('/appData.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch app data');
        return res.json();
      })
      .then((data) => {
        const found = data.apps.find((a) => a.id == id);
        setApp(found || null);
      })
      .catch((err) => {
        console.error(err);
        setApp(null);
      });
  }, [id]);

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app?.title || 'App'} installed successfully!`);
  };

  if (!app) return <p className="text-center mt-10 text-lg">Loading...</p>;

  const chartData = app.ratings ? [...app.ratings].reverse() : [];

  return (
    <div className="w-11/12 mx-auto py-10 font-sans">

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-150 md:h-80 shrink-0">
          {app.image ? (
            <img
              src={app.image}
              alt={app.title}
              className="rounded-3xl shadow-md w-full h-full object-cover border border-gray-100"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-900">{app.title}</h1>
          <p className="text-blue-600 font-medium text-lg">{app.companyName}</p>

          <div className="flex flex-wrap gap-6 mt-1">
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg">{app.ratingAvg} ⭐</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                {app.reviews.toLocaleString()} Reviews
              </span>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg">
                {(app.downloads / 1000000).toFixed(0)}M+
              </span>
              <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Downloads</span>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg">{app.size} MB</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Size</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 py-2.5 px-10 rounded-full font-bold text-white transition-all transform active:scale-95 ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg'
              }`}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>
      <hr className="my-10 border-gray-100" />

      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Ratings</h2>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#4b5563', fontSize: 13, fontWeight: 500 }}
                width={60}
              />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar
                dataKey="count"
                fill="#f97316"
                radius={[0, 4, 4, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
            <br /><br />
            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
            <br /><br />
            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AppDetails;