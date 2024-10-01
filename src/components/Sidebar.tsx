import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate, Link, useLocation} from 'react-router-dom';

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
          dispatch(logout());  // Clear auth token from Redux and localStorage
          navigate('/login');  // Redirect to login page
        }
      };

      const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: 'fas fa-home' },
        { name: 'Profile', path: '/profile', icon: 'fas fa-user' },
        { name: 'Create Group', path: '/create-group', icon: 'fas fa-users' },
        { name: 'Chat', path: '/chat', icon: 'fas fa-comment' },
        { name: 'Notifications', path: '/notifications', icon: 'fas fa-bell' }
      ];
      
      return (
        <aside className="bg-white shadow-sm fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Group Lending</h2>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all 
                    ${location.pathname === item.path ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'} `}
                    style={{ width: '100%' }}  // Ensures fixed width for buttons
                  >
                    <i className={`${item.icon} mr-3`}></i> {/* Icon */}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  style={{ width: '100%' }}  // Fixed width for logout button
                >
                  <i className="fas fa-sign-out-alt mr-3"></i> {/* Logout icon */}
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </aside>
      );
};

export default Sidebar;