import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import darkModeReducer from '../features/darkMode/darkModeSlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';


export const store = configureStore({
  reducer: {
    darkmode: darkModeReducer,
    posts: postsReducer,
    shoppingCart: shoppingCartReducer
  },
});

