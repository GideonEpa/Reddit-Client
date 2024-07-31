import styles from './NavBar.module.css';
import { useState } from 'react';

function NavBar() {
    const [ input, setInput ] = useState("")
    
    function handleChange({target}) {
        setInput(target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.brand}>
                <img
                    src='https://pluspng.com/img-png/reddit-logo-png-white-reddit-icon-free-white-site-logo-icons-512x512.png'
                    className={styles.img}/>
                <h1>Reddit <span>Lite</span></h1>
            </div>
            <div className={styles.search}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}/>
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/004/511/281/original/default-avatar-photo-placeholder-profile-picture-vector.jpg"
                    className={styles.img}/>
            </div>
        </div>
    )
}

export default NavBar;