import styles from './ScrollToTop.module.css'

export default function ScrollToTop() {
    let mybutton = document.getElementById("myBtn");
    function handleClick() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

    return (
        <button onClick={handleClick} className={styles.myBtn} id="myBtn" title="Go to top">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>
        </button>
    )
}