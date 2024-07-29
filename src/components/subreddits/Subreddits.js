import styles from "./Subreddits.module.css"
import Subreddit from "./Subreddit.js"

function Subreddits({topSubs}) {
    return (
        <div className={styles.subreddits}>
            {topSubs.map(sub => {
                return <Subreddit sub={sub.data}/> 
            })}
        </div>
    )
}

export default Subreddits;