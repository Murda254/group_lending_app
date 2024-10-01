import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

// Initial state based on local storage
const initialState: AuthState = {
  token: localStorage.getItem('authToken'),  // Retrieve token from localStorage
  isLoggedIn: !!localStorage.getItem('authToken'), // User is logged in if a token exists
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;          // Set token from action payload
      state.isLoggedIn = true;                // Update login status
      localStorage.setItem('authToken', action.payload);  // Persist token in localStorage
    },
    logout: (state) => {
      state.token = null;                     // Clear token
      state.isLoggedIn = false;               // Update login status
      localStorage.removeItem('authToken');   // Remove token from localStorage
    },
  },
});

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

