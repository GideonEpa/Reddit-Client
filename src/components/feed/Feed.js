import Post from "../post/Post.js";
import styles from "./Feed.module.css"

function Feed({ feed }) {
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