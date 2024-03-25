import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";
import React from "react";

const reactionEmoji = {
  thumbsup: "👍",
  wow: "😮",
  heart: "💓",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const ReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionsAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{ReactionButtons}</div>;
};

export default ReactionButton;
