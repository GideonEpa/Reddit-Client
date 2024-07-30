import styles from './Post.module.css';
import { useState } from 'react';
import Comments from '../comments/Comments.js';

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

    const [showComments, setShowComments] = useState(false);

    function handleClick(){
        setShowComments(showComments ? false : true);
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
            <div className={styles.comments}>
                {showComments && <Comments
                    permalink={permalink}
                    showComments={showComments}
                    handleClick={handleClick}/>}
            </div>
        </div>
    )
}

export default Post;