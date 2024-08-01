import styles from './NavBar.module.css';
import { useState } from 'react';
import DarkmodeSwitch from '../darkmode/Darkmode.js';

function NavBar() {
    const [input, setInput] = useState("")

    function handleChange({ target }) {
        setInput(target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.brand}>
                <img
                    src='https://pluspng.com/img-png/reddit-logo-png-white-reddit-icon-free-white-site-logo-icons-512x512.png'
                    className={styles.img} />
                <h1>Reddit <span>Lite</span></h1>
            </div>
            <div className={styles.search}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange} />
                <DarkmodeSwitch />
            </div>
        </div>
    )
}

export default NavBar;