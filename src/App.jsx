import React, { useState } from 'react';
import { Home, Layers, Cloud, Activity, Globe, Settings, User } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabsData = {
    projects: {
      title: 'Projects',
      description: 'Manage your projects and track their progress.',
      content: [
        { id: 1, name: 'Web Dashboard', status: 'Active' },
        { id: 2, name: 'Mobile App', status: 'In Progress' },
        { id: 3, name: 'E-commerce Platform', status: 'Completed' },
        { id: 4, name: 'AI Chatbot', status: 'Active' },
        { id: 5, name: 'Portfolio Website', status: 'Under Review' },
        { id: 6, name: 'Cloud Integration System', status: 'Active' },
      ],
      activities: [
        { id: 1, name: 'Emma Rodriguez', message: 'Completed UI redesign', time: '10 mins ago' },
        { id: 2, name: 'Michael Chen', message: 'Fixed layout issues', time: '45 mins ago' },
        { id: 3, name: 'Sophia Patel', message: 'Started backend development', time: '1 hour ago' },
        { id: 4, name: 'Liam Thompson', message: 'Reviewed pull requests', time: '3 hours ago' },
        { id: 5, name: 'Olivia Martin', message: 'Added new feature request', time: '6 hours ago' },
      ],
    },
    deployments: {
      title: 'Deployments',
      description: 'Track deployment progress and manage release pipelines.',
      content: [
        'Production Environment',
        'Staging Environment',
        'Development Environment',
        'Testing Environment',
        'Disaster Recovery',
      ],
      activities: [
        { id: 1, name: 'Alice Johnson', message: 'Deployed new version', time: '2 mins ago' },
        { id: 2, name: 'Bob Smith', message: 'Initiated rollback', time: '1 hour ago' },
        { id: 3, name: 'Ethan Hunt', message: 'Validated production build', time: '2 hours ago' },
        { id: 4, name: 'Grace Lee', message: 'Fixed deployment script', time: '5 hours ago' },
        { id: 5, name: 'Zara Ali', message: 'Set up auto-scaling', time: '8 hours ago' },
      ],
    },
    activity: {
      title: 'Activity',
      description: 'Monitor recent team activities.',
      content: ['UI Changes', 'API Updates', 'Performance Optimization', 'Bug Fixes', 'Code Refactoring'],
      activities: [
        { id: 1, name: 'Charlie Brown', message: 'Completed code review', time: '1 hour ago' },
        { id: 2, name: 'Diana Prince', message: 'Updated project documentation', time: '3 hours ago' },
        { id: 3, name: 'Peter Parker', message: 'Merged feature branch', time: '5 hours ago' },
        { id: 4, name: 'Bruce Wayne', message: 'Performed vulnerability scan', time: '8 hours ago' },
        { id: 5, name: 'Clark Kent', message: 'Optimized database queries', time: '1 day ago' },
      ],
    },
    domains: {
      title: 'Domains',
      description: 'Manage and configure your domains.',
      content: [
        'example.com',
        'example.org',
        'myapp.io',
        'dashboard.dev',
        'services.net',
        'custom-domain.app',
      ],
      activities: [
        { id: 1, name: 'Ethan Hunt', message: 'Updated DNS records', time: '15 mins ago' },
        { id: 2, name: 'Grace Lee', message: 'Added new domain', time: '1 day ago' },
        { id: 3, name: 'Sophia Zhang', message: 'Renewed SSL certificate', time: '3 days ago' },
        { id: 4, name: 'James Bond', message: 'Transferred domain ownership', time: '4 days ago' },
        { id: 5, name: 'Natasha Romanoff', message: 'Configured subdomain', time: '5 days ago' },
      ],
    },
    usage: {
      title: 'Usage',
      description: 'View system usage and metrics.',
      content: [
        'Memory Usage',
        'CPU Utilization',
        'API Requests',
        'Database Connections',
        'Disk Space Usage',
        'Network Throughput',
      ],
      activities: [
        { id: 1, name: 'James Bond', message: 'Analyzed usage trends', time: '5 hours ago' },
        { id: 2, name: 'Natasha Romanoff', message: 'Reduced memory footprint', time: '1 day ago' },
        { id: 3, name: 'Tony Stark', message: 'Monitored API performance', time: '2 days ago' },
        { id: 4, name: 'Bruce Banner', message: 'Optimized database connections', time: '3 days ago' },
        { id: 5, name: 'Steve Rogers', message: 'Upgraded server hardware', time: '1 week ago' },
      ],
    },
    settings: {
      title: 'Settings',
      description: 'Configure system preferences and user settings.',
      content: [
        'Profile Settings',
        'Notification Preferences',
        'Access Control',
        'API Keys',
        'Theme Customization',
        'Security Settings',
      ],
      activities: [
        { id: 1, name: 'Peter Parker', message: 'Changed password', time: '30 mins ago' },
        { id: 2, name: 'Bruce Wayne', message: 'Updated notification settings', time: '2 hours ago' },
        { id: 3, name: 'Natasha Romanoff', message: 'Modified access control rules', time: '1 day ago' },
        { id: 4, name: 'Tony Stark', message: 'Enabled two-factor authentication', time: '2 days ago' },
        { id: 5, name: 'Diana Prince', message: 'Customized dashboard theme', time: '3 days ago' },
      ],
    },
    profile: {
      title: 'Profile',
      description: 'View and edit your profile details.',
      content: [
        'Name: John Doe',
        'Email: john.doe@example.com',
        'Role: Admin',
        'Organization: Tech Corp',
        'Location: New York, USA',
      ],
      activities: [
        { id: 1, name: 'John Doe', message: 'Updated profile picture', time: '5 mins ago' },
        { id: 2, name: 'John Doe', message: 'Changed email address', time: '3 hours ago' },
        { id: 3, name: 'Jane Doe', message: 'Reviewed account settings', time: '2 days ago' },
        { id: 4, name: 'Harry Potter', message: 'Set a new recovery email', time: '3 days ago' },
        { id: 5, name: 'Ron Weasley', message: 'Changed profile preferences', time: '4 days ago' },
      ],
    },
  };

  const currentTab = tabsData[activeTab];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Navigation Pane */}
      <div className="w-64 bg-white border-r shadow-md flex flex-col">
        <div className="p-5 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            {Object.entries({
              projects: { icon: <Home />, name: 'Projects' },
              deployments: { icon: <Cloud />, name: 'Deployments' },
              activity: { icon: <Activity />, name: 'Activity' },
              domains: { icon: <Globe />, name: 'Domains' },
              usage: { icon: <Layers />, name: 'Usage' },
              settings: { icon: <Settings />, name: 'Settings' },
              profile: { icon: <User />, name: 'Profile' },
            }).map(([key, item]) => (
              <li
                key={key}
                className={`flex items-center p-2 rounded-md cursor-pointer ${
                  activeTab === key ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(key)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{currentTab.title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{currentTab.description}</p>
        <div className="space-y-4">
          {currentTab.content.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
              {typeof item === 'object' ? (
                <>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.status}</p>
                </>
              ) : (
                <p className="text-gray-800">{item}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Activity Log */}
      <div className="w-64 bg-white border-l shadow-md p-4 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Activity Log</h3>
        <div className="space-y-4">
          {currentTab.activities.map((activity) => (
            <div key={activity.id} className="border-b pb-3 last:border-b-0">
              <div className="flex justify-between mb-1">
                <p className="font-semibold text-gray-800">{activity.name}</p>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
              <p className="text-sm text-gray-600">{activity.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
