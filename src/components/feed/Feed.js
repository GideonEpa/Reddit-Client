import Post from "../post/Post.js";
import styles from "./Feed.module.css"

function Feed({topPosts}) {
    return (
        <div className={styles.feed}>
            {topPosts.map(post => {
                return <Post post={post.data}/>
            })}
        </div>
    )
}

export default Feed;