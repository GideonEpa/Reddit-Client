import styles from './Post.module.css';

function Post({post}) {
    console.log(post)
    const { 
        author,
        num_comments, 
        ups, 
        title, 
        subreddit,
        url, 
    } = post;

    return (
        <div className={styles.post}>
            <h2>{title}</h2>
            <img 
                src={url}
                onError={""}
                className={styles.img}/>
        </div>
    )
}

export default Post;