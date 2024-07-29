import styles from "./Subreddits.module.css"

export default function Subreddit({sub}) {
    const { title, icon_img } = sub;

    return (
        <div className={styles.subreddit}>
            <img
                className={styles.icon} 
                src={icon_img ? icon_img : "https://www.redditstatic.com/avatars/avatar_default_10_DDBD37.png"}/>
            <h3>{title}</h3>
        </div>
    )
}