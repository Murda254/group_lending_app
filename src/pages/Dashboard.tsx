import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard: React.FC = () => {
  // Sample group data (hardcoded for now)
  const groups = [
    {
      name: 'Group 1',
      role: 'Admin',
      members: 10,
      savings: 1200,
      color: '#1E90FF', // Blue
    },
    {
      name: 'Group 2',
      role: 'Treasurer',
      members: 8,
      savings: 950,
      color: '#FF4500', // Red
    },
    {
      name: 'Group 3',
      role: 'Member',
      members: 12,
      savings: 600,
      color: '#32CD32', // Green
    },
  ];

  // State to track the currently active group
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Graph data (hardcoded for now)
  const savingsData = [
    { month: 'Jan', group1: 200, group2: 150, group3: 100 },
    { month: 'Feb', group1: 400, group2: 250, group3: 200 },
    { month: 'Mar', group1: 600, group2: 400, group3: 300 },
    { month: 'Apr', group1: 800, group2: 600, group3: 400 },
    { month: 'May', group1: 1200, group2: 950, group3: 600 },
  ];

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      {/* Main Content */}
      <div className="p-4">
        {/* Navbar */}
        <nav className="block backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 w-full max-w-full px-4 bg-white rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-gray-600">Dashboard</div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search"
                className="border px-3 py-1 rounded-md"
                disabled
              />
              <button className="text-gray-600">
                <i className="fas fa-bell"></i> {/* Notifications icon */}
              </button>
            </div>
          </div>
        </nav>

        {/* Grid Container for Cards */}
        <div className="mt-12 mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.name}
              className={`relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm transition-transform transform hover:scale-105 ${
                activeGroup === group.name ? 'border-blue-600' : ''
              }`}
              onClick={() => setActiveGroup(group.name)} // Set active group on click
              onMouseEnter={() => setActiveGroup(group.name)} // Set active group on hover
              onMouseLeave={() => setActiveGroup(null)} // Reset active group when hover ends
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-500">Role: {group.role}</p>
                <p className="text-sm text-gray-500">Members: {group.members}</p>
                <p className="text-sm text-gray-500">Your Savings: ${group.savings}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Savings Growth Graph */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Savings Growth</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={savingsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {groups.map((group, index) => (
                <Line
                  key={group.name}
                  type="monotone"
                  dataKey={`group${index + 1}`}
                  stroke={group.color}
                  strokeWidth={activeGroup === group.name ? 4 : 2} // Highlight active group's line
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

