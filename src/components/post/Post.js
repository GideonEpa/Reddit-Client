import styles from './Post.module.css';
import { useState } from 'react';
import Comments from './Comments.js';

function Post({post}) {
    const { 
        author,
        num_comments, 
        ups, 
        title, 
        subreddit,
        url,
        created_utc,
        permalink 
    } = post;

    const timePosted = Math.floor((((new Date()).getTime() / 1000) - created_utc) / 60 / 60);

    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(isClicked ? false : true);
    }
    
    return (
        <div className={styles.post}>
            <span>r/{subreddit} {ups}</span>
            <h2>{title}</h2> <br/>
            {url[8] === "i" && <img 
                src={url}
                className={styles.img}
                alt={title}/>}
            <div className={styles.container}>
                <p>by <span className={styles.author}>{author}</span></p>
                <p> {timePosted} hours ago</p>
                <p
                className={styles.commentsCount} 
                onClick={handleClick}>{num_comments} comments</p>
            </div>
            {isClicked && <Comments 
                permalink={permalink}
                isClicked={isClicked}/>}
        </div>
    )
}

export default Post;