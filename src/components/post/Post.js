import styles from './Post.module.css';
import Reddit from "../../Auth/Reddit.js";import { useEffect, useState } from 'react';

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

    const [comments, setComments] = useState();

    useEffect(() => {
        async function getComments() {
            const data = await Reddit.getComments(permalink);
            setComments(data);
            console.log(comments)
        }
        getComments();
    }, [])

    return (
        <div className={styles.post}>
            <span>r/{subreddit}</span>
            <h2>{title}</h2> <br/>
            <img 
                src={url}
                onError={""}
                className={styles.img}/>
            <div className={styles.container}>
                <p>by <span className={styles.author}>{author}</span></p>
                <p> {timePosted} hours ago</p>
                <p>{num_comments} comments</p>
            </div>
        </div>
    )
}

export default Post;