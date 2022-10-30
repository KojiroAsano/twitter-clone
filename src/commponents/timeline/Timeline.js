import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import FlipMove from "react-flip-move"

import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"))
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
  });



  }, []);// by empty, only one time

  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map((post) => (
        <Post
        key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
