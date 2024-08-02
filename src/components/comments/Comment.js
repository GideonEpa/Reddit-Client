import styles from './Comments.module.css'

export default function Comment({ comment }) {
    const { author, body } = comment.data;

    // Split large bodies of text
    const bodyLines = body.split("\n")

    return (
        <div className={styles.comment}>
            <span className={styles.commentor}>{author}</span>
            {bodyLines.map(line => {
                return (
                    <p className={styles.commentBody}>{line}</p>
                )
            })}
        </div>
    )
}