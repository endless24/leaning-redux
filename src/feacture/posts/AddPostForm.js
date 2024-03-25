import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { postsAdded } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContenChange = (e) => setContent(e.target.value);
  const onAnthorChange = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postsAdded(title, content, userId)
        // postsAdded({
        //   id: nanoid(),
        //   title,
        //   content,
        // })
      );
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content && Boolean(userId));

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle"> Post Title:</label>
        <input
          type="text"
          value={title}
          id="postTitle"
          name="postTitle"
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor"> Author:</label>
        <select id="postAuthor" value={userId} onChange={onAnthorChange}>
          <option></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent"> Post Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContenChange}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
