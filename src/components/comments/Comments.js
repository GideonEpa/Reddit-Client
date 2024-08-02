import { useState, useEffect } from "react"

// CSS Styles
import styles from "./Comments.module.css"

// Reddit fetch functions
import Reddit from "../../Reddit/Reddit.js";

import Comment from "./Comment.js";

export default function Comments({ permalink, handleClick }) {
    // Get comments for post
    const [comments, setComments] = useState();
    useEffect(() => {
        async function fetchComments() {
            const data = await Reddit.getComments(permalink);
            setComments(data[1].data.children);
        }
        fetchComments();
    }, [permalink])

    return (
        <div className={styles.comments}>
            {comments ? <h3>Comments</h3> : "Loading..."}
            {comments && comments.map((comment, i) => {
                return (
                    comment.data.author &&
                    <Comment key={"comment" + i} comment={comment} />
                )
            })}
            {comments && <button className={styles.close} onClick={() => handleClick()}>Close</button>}

        </div>
    )
}