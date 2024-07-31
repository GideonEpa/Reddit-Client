import styles from "./Subreddits.module.css"

export default function Subreddit({ sub, setSelectedSub, selectedSub }) {
    const { display_name, icon_img } = sub;

    function handleClick() {
        display_name === "Home" ? setSelectedSub("all") :
            setSelectedSub(display_name);
    }

    return (
        <div onClick={handleClick} className={`${styles.subreddit} ${selectedSub === display_name && styles.selected}`}>
            <img
                className={styles.icon}
                src={icon_img ? icon_img : "https://www.redditstatic.com/avatars/avatar_default_10_DDBD37.png"} />
            <h3>{display_name}</h3>
        </div>
    )
}