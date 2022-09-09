import logo from "./logo.svg";
import "./App.css";
import MapComponent from "./map-component/MapComponent";
import Post from "./map-component/MapComponent/Post/Post";
import { useState } from "react";
import { useEffect } from "react";
import { fbPost } from "./data/index";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setPosts(fbPost.data.facebookAdPosts.data);
  }, []);

  return (
    <div className="map_container">
      <div className="left_side">
        <MapComponent />
      </div>
      <div className="right_side">
        <div className="post_item_title">
          <h4>Date</h4>
          <h4>Comments</h4>
          <h4>Likes</h4>
          {/* <h4>Mark as read</h4> */}
        </div>
        {posts.map((post) => (
          <Post post={post} setSelectedPost={setSelectedPost} />
        ))}
      </div>
    </div>
  );
}

export default App;
