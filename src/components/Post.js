import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import VerifiedUserSharp from '@material-ui/icons/VerifiedUserSharp'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css"
import { UserAuth } from '../context/AuthContext';

const Post = ({ displayName,userName,verified,text,image,avatar,}) => {
  const { googleSignIn, user } = UserAuth();

  

  return (
    <div className="post">
        <div className="post__avatar">
        <img src={user?.photoURL} alt=""/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post_headerText">
                   <h3>
                   {user?.displayName} 
                     <span className="post__headerSpecial">
                        <VerifiedUserIcon className="post__badge"/></span>
                   </h3>
                </div>
                <div className="post_headerDescriiption">
                    <p>{text}</p>
                </div>
            </div>
            <img src={avatar}/>
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div> 
    </div>
  )
}

export default Post