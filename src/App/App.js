import { useState, useEffect } from "react";

// Import components
import NavBar from "../components/navbar/NavBar.js";
import Subreddits from "../components/subreddits/Subreddits.js";
import Feed from "../components/feed/Feed.js";
import styles from "./App.module.css";
import ScrollToTop from "../components/scrolltotop/ScrollToTop.js";

// Import reddit fetch functions
import Reddit from "../Reddit/Reddit.js";

function App() {
  // Get feed from selected sub, default on r/all;
  const [selectedSub, setSelectedSub] = useState("all")
  const [feed, setFeed] = useState();

  useEffect(() => {
    async function fetchFeed() {
      const posts = await Reddit.getFeed(selectedSub);
      setFeed(posts);
    }
    fetchFeed()
  },[selectedSub])

  // Get list of top subreddits
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
        {feed &&
          <Feed
            className={styles.feed}
            feed={feed} />}
        {topSubs &&
          <Subreddits
            className={styles.subreddits}
            topSubs={topSubs}
            setSelectedSub={setSelectedSub}
            selectedSub={selectedSub}
          />}
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
