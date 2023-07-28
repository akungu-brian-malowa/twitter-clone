import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { UserAuth } from "../context/AuthContext";
import "./TweetBox.css";

const TweetBox = () => {
  const { user } = UserAuth();
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <div className="tweetBox__avatar">
            <img src={user?.photoURL} alt="" />
          </div>
          <input placeholder="whats happening" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
