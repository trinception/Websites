
import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.navContainer}>

          <nav>
            <ul className={styles.navBar}>

              <li >
                <Link href="/" data-item='Home'>
                  <Image
                    src="/h.svg"
                    alt="Trinity Evans"
                    className={styles.nameLogo}
                    width={70}
                    height={45}
                    priority
                  />
                </Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/projects" data-item='Projects'>Projects</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/about" data-item='About'>About</Link>
              </li>

            </ul>
          </nav>

          <label className={styles.styleToggle}>

              <div className={styles.toggle}>
                  <input className={styles.toggleState} type="checkbox" name="check" value="check"/>
                  <div className={styles.indicator}></div>
              </div>

          </label>
        </div>

        <div className={styles.imageContainer}>
          <img src="./imgs/h-10.png" alt="computer" title="Trinception" width="auto" height="auto"/>
        </div>

        <div className={styles.footerContainer}>

          <div className={styles.footer}>

              <div className={styles.aboutBlurb}>
                <p className={styles.wordHighlightPassion}>Hello There!</p>
                <p>trinityevansphoto@gmail.com</p>
                <p>This website is best viewed on desktop</p>
                <p>Made by Trinity Evans </p>
              </div>

          </div>
        </div>

  </main>
);
}
