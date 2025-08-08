// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
];

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },

  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      // Find matching user
      const user = users.find(
        user => user.username === username && user.password === password
      );

      if (user) {
        state.user = { username: user.username };
        state.isAuthenticated = true;
        state.error = null;
      }
      else {
        state.error = "Invalid username or password"
      }

    },
    // You can add other synchronous reducers here if needed

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;