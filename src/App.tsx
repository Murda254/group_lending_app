import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RootState } from './redux/store';
import { login } from './redux/authSlice';
import Login from './pages/Login';
import SignUp from './pages/SignUp';  
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CreateGroup from './pages/CreateGroup';
import Chat from './pages/Chat';
import Notifications from './pages/Notifications';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute'; 

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // On page load, check if there's an auth token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(login(token));  // Automatically log in the user if token exists
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes wrapped in Layout and PrivateRoute */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn}><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
