import styles from "./Post.module.css"
import Reddit from "../../Auth/Reddit.js"
import { useState, useEffect } from "react"

export default function Comments({permalink}) {
    const [comments, setComments] = useState();

    useEffect(() => {
        async function fetchComments() {
            const data = await Reddit.getComments(permalink);
            setComments(data[1]);
        }
        fetchComments();
    })

    return (
        <div className={styles.comments}>
            {comments && comments.map(comment => {
                return (
                    <div>
                        <span></span>
                        <p></p>
                    </div>
                )
            })}

        </div>
    )
}