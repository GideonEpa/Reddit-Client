import styles from "./Subreddits.module.css"
import Subreddit from "./Subreddit.js"

function Subreddits({ topSubs, setSelectedSub, selectedSub }) {
    // Map each subreddit from topSubs object into its own component
    return (
        <div className={styles.subreddits}>
            {topSubs.map((sub, i) => {
                return <Subreddit key={"sub" + i} setSelectedSub={setSelectedSub} sub={sub.data} selectedSub={selectedSub} />
            })}
        </div>
    )
}

export default Subreddits;