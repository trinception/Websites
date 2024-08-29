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
                <Link className={styles.listItem} href="/" data-item='Home'>Home</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/projects" data-item='Projects'>Projects</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/about" data-item='About'>About</Link>
              </li>

            </ul>
          </nav>
          <div className={styles.upperCorner}>

                <div>
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
                </div>


          </div>
        </div>
          <div className={styles.formContainer}>
            <form>
            		<a className={styles.nameIcon}>Contact Me</a>


            			<div className={styles.nameSpace}>
            				<label for="formName" className={styles.dBlock}>
            					<i className={styles.userIcon} data-feather="user"></i>
            				</label>
            				<input type="text" id="formName" className={styles.placeholder} placeholder="Name"></input>
            			</div>


            			<div className={styles.emailSpace}>
            				<label for="formEmail" className={styles.dBlock}>
            					<i className={styles.userIcon} data-feather="mail"></i>
            				</label>
            				<input type="email" id="formEmail" className={styles.placeholder} placeholder="E-mail"></input>
            			</div>


            			<div className={styles.msgSpace}>
            				<textarea id="formMessage" className={styles.placeholder} rows="7" placeholder="Message"></textarea>
            			</div>

            			<div className={styles.buttons}>
            				<button type="submit" className={styles.btn} tabIndex="-1">Send message</button>
            			</div>
            </form>
          </div>

          <div className={styles.footerContainer}>

            <div className={styles.footer}>

                <div className={styles.footerBlurb}>
                  <p className={styles.wordHighlightClickMe}>Hello There!</p>
                  <p>This website is best viewed on a desktop!</p>
                  <p>Email me at trinityevansphoto@gmail.com</p>

                  <p>Made by Trinity Evans </p>
                </div>
                <div className={styles.footerLinks}>
                  <a href="/">GitHub</a>
                  <br/>
                  <a href="/">LinkedIn</a>
                  <br/>
                  <a href="/contact">Contact Form</a>
                </div>

            </div>
          </div>

      </main>
    );
}
