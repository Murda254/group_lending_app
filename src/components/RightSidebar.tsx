import React from 'react';

interface RightSidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isVisible, onClose }) => {
  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : 'translate-x-96'
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Right Sidebar Placeholder</h2>
        {/* Close button */}
        <button
          onClick={onClose}  // Trigger the close function on click
          className="text-gray-500 hover:text-gray-700 transition duration-150"
        >
          <i className="fas fa-times"></i> {/* FontAwesome "X" icon */}
        </button>
      </div>
      <div className="p-4">
        <p>Content goes here...</p>
      </div>
    </aside>
  );
};

export default RightSidebar;