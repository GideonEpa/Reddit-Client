import styles from './Post.module.css';
import { useState } from 'react';
import Comments from '../comments/Comments.js';

function Post({ post }) {
    const {
        author,
        num_comments,
        ups,
        title,
        subreddit,
        url,
        created_utc,
        permalink,
        selftext,
        is_video,
        secure_media,
        preview,
        is_gallery
    } = post;

    let displayMedia;
    if (preview && !is_video) {
        displayMedia = (
        <img
            src={url}
            className={styles.img}
            alt={title}/>
        )
    } else if (is_video) {        
        const video = secure_media.reddit_video;
        const videoUrl = video.fallback_url;

        let type;
        if (videoUrl.match(".mp4")) {
            type = "video/mp4"
        } else if (videoUrl.match(".webm")) {
            type = "video/webm"
        } else if (videoUrl.match(".ogg")) {
            type = "video/ogg"
        }

        displayMedia = (
            <video controls width={430} height={"auto"} >
                <source src={videoUrl} type={type}/>
                Your browser doesn't support this video. Here is a <a href={videoUrl}>link to the video</a> instead.
            </video>
        );
    } else {
        displayMedia = null
    }

    const timePosted = Math.floor((((new Date()).getTime() / 1000) - created_utc) / 60 / 60);

    const [showComments, setShowComments] = useState(false);
    function handleClick() {
        setShowComments(showComments ? false : true);
    }

    const [upvoted, setUpvoted] = useState(false);
    function toggleUpvote() {
        upvoted ? setUpvoted(false) : setUpvoted(true);
    }

    let path;
    upvoted ? path = "m479-60-87-79q-108-98-178-168.5T104-434q-40-56-55.5-103.5T33-637q0-113 76-189.5T298-903q50 0 96.5 17.5T479-836q38-32 84.5-49.5T660-903q113 0 190 76.5T927-637q0 51-15.5 98.5t-55.5 103Q816-380 746-309T566-139l-87 79Z" : path = "m479-60-87-79q-108-98-178-168.5T104-434q-40-56-55.5-103.5T33-637q0-112.95 76.24-189.48Q185.47-903 298-903q49.93 0 96.47 17.5Q441-868 479-836q38-32 84.53-49.5Q610.07-903 660-903q113.38 0 190.19 76.52Q927-749.95 927-637q0 51-15.5 98.5t-55.5 103Q816-380 746-309T566-139l-87 79Zm0-183q95-87 155.5-146.5T730-493q35-44 48-77.65 13-33.65 13-66.33Q791-693 753.49-730q-37.5-37-93.01-37-42.48 0-80.98 27-38.5 27-49.5 64H429q-10.53-37-49.76-64-39.24-27-80.97-27-55.54 0-91.91 37Q170-693 170-637q0 33.76 13.44 67.99 13.44 34.24 48 78.63Q266-446 326-387q60 59 153 144Zm2-262Z"

    return (
        <div className={styles.post}>
            <div className={styles.postBody}>
                <div className={styles.ups}>
                    <svg onClick={toggleUpvote} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d={path} /></svg>
                    <p>{ups > 1000 ? Math.floor((upvoted ? ups + 1 : ups) / 1000 * 10) / 10 + "k" : (upvoted ? ups + 1 : ups)}</p>
                </div>
                <div>
                    <span>r/{subreddit}</span>
                    <h2>{title}</h2> <br />
                    {displayMedia}
                    <p><i>{selftext}</i></p>
                </div>
            </div>
            <div className={styles.credentials}>
                <p>by <span className={styles.author}>{author}</span></p>
                <p> {timePosted} hours ago</p>
                <p
                    className={styles.commentsCount}
                    onClick={handleClick}><svg className={styles.commentIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                    {num_comments} 
                </p>
            </div>
            <div className={styles.comments}>
                {showComments && <Comments
                    permalink={permalink}
                    showComments={showComments}
                    handleClick={handleClick} />}
            </div>
        </div>
    )
}

export default Post;