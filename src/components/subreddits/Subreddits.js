import styles from "./Subreddits.module.css"
import Subreddit from "./Subreddit.js"

function Subreddits({topSubs}) {
    return (
        <div className={styles.subreddits}>
            {topSubs.map((sub, i) => {
                return <Subreddit key={"sub" + i} sub={sub.data}/> 
            })}
        </div>
    )
}

export default Subreddits;