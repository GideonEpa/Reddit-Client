import { useState, useEffect } from "react";

import NavBar from "../components/navbar/NavBar.js";
import Subreddits from "../components/subreddits/Subreddits.js";
import Feed from "../components/feed/Feed.js";
import styles from "./App.module.css"; 

import Reddit from "../Reddit/Reddit.js";

function App() {
  const [topPosts, setTopPosts] = useState();

  useEffect(() => {
    async function fetchTopPosts() {
      const posts = await Reddit.getTopPosts();
      setTopPosts(posts);
    }
    fetchTopPosts();
  }, [])

  const [topSubs, setTopSubs] = useState();

  useEffect(() => {
    async function fetchTopSubs() {
      const posts = await Reddit.getTopSubs();
      setTopSubs(posts);
    }
    fetchTopSubs();
  }, [])

  return (
    <>
      <NavBar />
      <div className={styles.main}>
        {topPosts &&
        <Feed 
          className={styles.feed}
          topPosts={topPosts}/>}
        {topSubs &&
        <Subreddits 
          className={styles.subreddits}
          topSubs={topSubs}
          />}
      </div>
    </>
  );
}

export default App;
