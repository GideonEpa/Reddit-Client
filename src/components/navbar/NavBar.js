import styles from './NavBar.module.css';
import { useState } from 'react';

function NavBar() {
    const [ input, setInput ] = useState("")
    
    function handleChange({target}) {
        setInput(target.value);
    }

    return (
        <div className={styles.container}>
            <h1>placeholder <span>B</span></h1>
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