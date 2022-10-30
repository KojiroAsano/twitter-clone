import React from "react";
import { Search } from "@mui/icons-material";
import { TwitterTimelineEmbed,  TwitterTweetEmbed, TwitterShareButton } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets--widgetContainer">
        <h2>What’s happening</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />
        <TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
      </div>
    </div>
  );
}

export default Widgets;
