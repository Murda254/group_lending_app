import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';        
import FloatingButton from './FloatingButton'; 
import RightSidebar from './RightSidebar'; 

const Layout: React.FC = () => {
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

  // Function to toggle the RightSidebar
  const toggleRightSidebar = () => {
    setIsRightSidebarVisible(!isRightSidebarVisible);
  };

  // Function to close the RightSidebar 
  const closeRightSidebar = () => {
    setIsRightSidebarVisible(false);
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        <main className="p-4 xl:ml-80">
          <Outlet /> {/* This renders the child routes (Dashboard, Profile, etc.) */}
        </main>
      </div>

      <FloatingButton onClick={toggleRightSidebar} />

      <RightSidebar isVisible={isRightSidebarVisible} onClose={closeRightSidebar} />
    </div>
  );
};

export default Layout;
