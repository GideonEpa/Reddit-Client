import Post from "../post/Post.js";
import styles from "./Feed.module.css"

function Feed({ feed }) {
    // Map each post from feed object into its own Post
    return (
        <div className={styles.feed}>
            {feed.map((post, i) => {
                return <Post
                    key={"post" + i}
                    post={post.data} />
            })}
        </div>
    )
}

export default Feed;