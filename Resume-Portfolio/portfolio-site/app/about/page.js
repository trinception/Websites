
import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";
import Accordion from '../../components/Accordion';

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
                  <Link className={styles.current} href="/about" data-item='About'>About</Link>
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
        <div className={styles.section1}>
          <p className={styles.nameIcon}>About Me</p>
          <div className={styles.aboutBlurb}>


            <div className={styles.titlePicContainer}>

              <div className={styles.imageContainer}>
                <img width="100%" height="auto" className={styles.portrait} src="./imgs/grad.jpg" alt="Picture of Trinity at university graduation" title="Trinity" data-name="Layer 1" viewBox="0 0 24 24" id="trinity"></img>
              </div>
            </div>

            <div className={styles.talking}>
              <p> My journey into the world of software engineering and development began during my first year at university, igniting a passion that continues to drive me today. I thrive on creating innovative solutions and exploring diverse approaches to tackle new challenges. I also love refining and perfecting existing solutions, and am always striving for elegance and efficiency in my work.</p>
              <br/>
              <Accordion items={[
                    {
                      title: "Academic Background",
                      content: "I have a BSc in Mathematics & Computer Science from Simon Fraser University. Unable to choose between these two fields, I embraced both, allowing me to develop a unique perspective that combines rigorous mathematical thinking with practical programming skills. I hope to pursue grad school one day."
                    },
                    {
                      title: "Skillset",
                      content: (
                        <>
                          Languages: C++, JavaScript, Java, Python, GoLang, Swift, SQL, PHP, HTML/CSS, MATLAB
                          <br/><br/>
                          Technologies: Git, Heroku, Next.js, NodeJS, React
                          <br/><br/>
                          Areas of expertise: While I have strong foundational skills throughout computer science, my strongest skills and greatest interest is in:
                          <br/>
                          -Backend programming
                          <br/>
                          -Object-oriented programming and design
                          <br/>
                          -Data Science/Data Analytics
                          <br/>
                          -Machine Learning
                        </>
                      )
                    },
                    {
                      title: "Professional Experience",
                      content: (
                        <>
                          I am currently working as a Machine Learning Research Assistant at <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://www.rosielab.ca" rel="noopener noreferrer">ROSIE Labs</a>, an AI robotics lab in Vancouver, BC. This role allows me to delve into cutting-edge technology, applying my skills to push the boundaries of what's possible in AI and robotics.
                        </>
                    )
                    },
                    {
                      title: "Passions and Interests",
                      content: (
                        <>
                          Technology: I'm deeply passionate about the potential of technology to improve our lives. I'm particularly interested in data science, machine learning, and AI, with a focus on addressing data bias and data inconsistencies, especially concerning underrepresented groups of people.
                          <br/><br/>
                          Problem Solving: I love tackling logical problems and challenges, particularly in mathematics (calculus and physics) and programming. While I enjoy all kinds of programming, object-oriented design holds a special place in my heart.
                          <br/><br/>
                          Community and Leadership: As the former captain of my university dance team, I developed a strong passion for leadership and community involvement. I believe in the power of collaboration and the importance of fostering a supportive environment.
                        </>
                      )
                    },
                    {
                      title: "When I'm Not Coding...",
                      content: (
                        <>
                           You might find me:
                           <br/>
                          - Curled up with a good book 📚
                          <br/>
                          - Hiking through beautiful British Columbia
                          <br/>
                          - Enjoying cozy computer games or science fiction shows like Star Trek and Doctor Who
                          <br/>
                          - Tending to my plants 🌱
                        </>
                        )
                    }
                  ]} />
              <br/>
              <p> Want to connect or know more? Send me an email or talk to my <a className={styles.wordHighlightClickMe} title="Click Me!" href="/about" rel="noopener noreferrer">PortfolioBot</a>, an AI chatbot I created that knows my skillset, experience, and even my hobbies!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <div className={styles.section}>
            <p className={styles.nameIcon}>PortfolioBot</p>

            <div className={styles.botSection}>
              <div className={styles.imageContainer}>
                <img src="./imgs/h-10.png" alt="computer" title="Trinception" width="100%" height="100%"/>
              </div>
              <div className={styles.chatBotContainer}>

              </div>
            </div>
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
