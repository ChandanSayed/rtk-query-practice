import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducer';
import { posts } from './api';
const store = configureStore({
  reducer: {
    api: posts.reducer,
    usersReducer: usersReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(posts.middleware)
});

export default store;
