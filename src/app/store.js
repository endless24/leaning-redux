import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feacture/posts/postSlice";
import usersReducer from "../feacture/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
