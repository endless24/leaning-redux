import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"; //imported timestamp

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard a good things. ",
    date: sub(new Date(), { minutes: 10 }).toISOString(), //time stamp
    reactions: {
      thumbsup: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more i say slice, the more i want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(), //time stamp
    reactions: {
      thumbsup: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // add an content
    postsAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(), //getting the time stamp
            userId,
            reactions: {
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postsAdded, reactionsAdded } = postsSlice.actions;

export default postsSlice.reducer;
