import React from "react";
import { forwardRef } from 'react'
import { Avatar } from "@mui/material";
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from "@mui/icons-material";
import './Post.css'


const Post = forwardRef(({displayName, username, verified, text, avatar, image}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post--avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post--body">
        <div className="post--header">
          <div className="post--headerText">
            <h3>{displayName}
            <span className="post--headerSpecial">
              <VerifiedUser className="post--badge" />
              {username}
            </span>
            </h3>
            <div className="post--headerDescription">
              <p>{text}</p>
            </div>
          </div>
        </div>
        <img src={image}>
        </img>
        <div className="post-footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
})


export default Post;
