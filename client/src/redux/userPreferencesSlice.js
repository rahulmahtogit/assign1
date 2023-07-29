import { createSlice } from '@reduxjs/toolkit';

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState: {
    primaryColor: 'default', // Default color theme
    token: null,
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setLogin: (state, action) => {
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.primaryColor = null;
      state.token = null;
    },
  },
});

export const { setPrimaryColor, setLogin, setLogout } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
