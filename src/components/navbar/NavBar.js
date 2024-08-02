import styles from './NavBar.module.css';
import { useState } from 'react';
import DarkmodeSwitch from '../darkmode/Darkmode.js';

function NavBar() {
    // Input text handler
    const [input, setInput] = useState("")
    function handleChange({ target }) {
        setInput(target.value);
    }

    return (
        <div className={styles.navbarContainer}>
            {/* Logo and brand name */}
            <div className={styles.brand}>
                <img
                    alt="logo"
                    src='https://pluspng.com/img-png/reddit-logo-png-white-reddit-icon-free-white-site-logo-icons-512x512.png'
                    className={styles.img} />
                <h1>Reddit <span>Lite</span></h1>
            </div>
            {/* Search box */}
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