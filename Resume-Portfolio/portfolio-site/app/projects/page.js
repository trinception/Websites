
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
            <Link className={styles.current} href="/projects" data-item='Projects'>Projects</Link>
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
        <div className={styles.bannerContainer}>

          <div className={styles.section}>

            <div className={styles.projectBlurb}>

              <div className={styles.imageContainer}>
                <img src="./imgs/h-8.png" alt="computer" title="Trinception" width="100%" height="100%"/>
              </div>

              <div className={styles.desc}>
                <p> <a className={styles.title}>&#128187; </a><a className={styles.nameIcon}>Projects</a> <br />
                This is a glimpse of my work. Only my portfolio sites are on my <span className={styles.wordHighlightSubtle}>GitHub</span>.
                For any specific inquiries on projects, <span className={styles.wordHighlightSubtle}>Contact Me</span>.</p>
              </div>



            </div>
          </div>
        </div>

        <div className={styles.gradientBG}>
          <div className={styles.projectSection}>


            <ul className={styles.grid}>


              <li className={styles.card}>

                  <div className={styles.project1}>
                    <h2>Map navigation system</h2>
                    <p></p>
                  </div>

              </li>

              <li className={styles.card}>

                  <div className={styles.project1}>
                    <h2>PortfolioGPT</h2>
                    <p></p>
                  </div>

              </li>

              <li className={styles.card}>

                  <div className={styles.project1}>
                    <h2>Lockdown Python Scraper</h2>
                    <p></p>
                  </div>

              </li>

              <li className={styles.card}>

                  <div className={styles.project1}>
                    <h2>Multi-level 2D Platform Game "Atmosphere"</h2>
                    <p></p>
                  </div>

              </li>
              <li className={styles.card}>

                  <div className={styles.project1}>
                    <h2>Portfolio Websites</h2>
                    <h4><a className={styles.bold}>Languages:</a> HTML, CSS, JS, PHP</h4>
                    <h4><a className={styles.bold}>Technologies:</a> NextJS, React, Bootstrap</h4>
                    <p className={styles.projectDescription}> Built my portfolio website from scratch. Includes interactive, dynamic elements, and a variety of unique features and easter eggs such as an AI chatbot.</p>

                  </div>

                  <div className={styles.expand}>
                    <div className={styles.seeMore}>
                      <strong>Read more...</strong>
                      <a className={styles.arrow}>&#709;</a>
                    </div>
                  </div>

              </li>

              <li className={styles.card}>

                <div className={styles.project1}>
                  <h2>Book Recommendation System</h2>
                  <h4><a className={styles.bold}>Language(s):</a> Python</h4>
                  <h4><a className={styles.bold}>Data source(s):</a> Amazon API, Goodreads API</h4>
                  <p className={styles.projectDescription}>Developed a collaborative filtering recommendation system in Python, leveraging existing book  rating databases, processed using Pandas, and implementing </p>
                </div>

                <div className={styles.expand}>
                  <div className={styles.seeMore}>
                    <strong>Read more...</strong>
                    <a className={styles.arrow}>&#709;</a>
                  </div>
                </div>

                <span className={styles.viewMore}> a user database using SQL. Currently enhancing the
                  project by creating a web-based front-end to offer users more interactive features.</span>

              </li>

              <li className={styles.card}>


                  <div className={styles.project1}>
                    <h2>(Research) The ContEgo Salsa Dataset</h2>
                    <p className={styles.projectDescription}>
                    Co-authored motion capture dataset of salsa dancers from various levels (beginner, intermediate, professional) improvising over a </p>
                  </div>

                  <div className={styles.expand}>
                    <div className={styles.seeMore}>
                      <strong>Read more...</strong>
                      <a className={styles.arrow}>&#709;</a>
                    </div>
                  </div>
                  <span className={styles.viewMore}>variety of different music styles and tempos.
                  <br/>
                  <a className={styles.bold}>Current uses:</a> Training ML Motion Style Transfer algorithms for use in technologies such as generative AI.
                  <br/>
                  <a className={styles.bold}>Potential uses/applications:</a> Gaming, TV, & Movies (generating realistic CGI character movement), Dance training and evaluation, etc.
                  <br/>
                  <a className={styles.bold}>About my role:</a> Co-author. Set up and calibrated our motion capture lab space, managed software migration and maintained our usage of the most modern software possible, perfected our data collection pipeline, ran participant recruitment and scheduling, and performed the actual data collection.</span>


              </li>

              <li className={styles.card}>

                  <div className={styles.project1}>
                    <h2>Multi-user gaming site</h2>
                    <h4><a className={styles.bold}>Languages:</a> HTML, CSS, JavaScript, SQL</h4>
                    <h4><a className={styles.bold}>Technologies:</a> Heroku, Socket.io, NodeJS, PostGreSQL</h4>
                    <p className={styles.projectDescription}>Developed a full stack web-based racing game application allowing users to create profiles, add friends,
                      engage in real-time chat, and compete against
                      </p>
                  </div>

                  <div className={styles.expand}>
                    <div className={styles.seeMore}>
                      <strong>Read more...</strong>
                      <a className={styles.arrow}>&#709;</a>
                    </div>
                  </div>

                  <span className={styles.viewMore}>
                   each other. Implemented using JavaScript for frontend interactivity, HTML/CSS for styling, Node.js for server-side logic, PostgreSQL for database management, and
                  Socket.IO for real-time communication. Successfully integrated multiple technologies to deliver an immersive
                  gaming experience with social interaction features.
                  </span>

              </li>

            </ul>

            <ul className={styles.wrapper}>

                <li className={styles.icon}>
                  <button className={styles.btn}>
                    <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                   </button>
                 </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>

            <div className={styles.footer}>

                <div className={styles.footerBlurb}>
                  <p className={styles.wordHighlightClickMe}>Hello There!</p>

                  <p>This website is best viewed on a desktop!</p>
                  <br/>
                  <p>Email me at trinityevansphoto@gmail.com</p>
                  <p>Made by Trinity Evans </p>
                  <br/>
                </div>
                <div className={styles.footerLinks}>
                  <div>
                    <a title="GitHub" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer" >GitHub</a>
                  </div>

                  <div>
                    <a target="_blank" href="https://www.linkedin.com/in/trinity-e-b633812b4" rel="noopener noreferrer" >LinkedIn</a>
                  </div>

                  <div>
                    <a href="/contact">  Contact</a>
                  </div>
                </div>

            </div>
          </div>
        </div>

  </main>
);
}
