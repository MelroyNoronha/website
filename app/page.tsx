import Link from 'next/link'

import styles from './page.module.css'
import {urls} from './constants'

export default function Home() {
  const bottomLinkClassNames = `${styles.link} ${styles.xLargeFont}`

  return (
    <main className={styles.main}>
      <h1>Melroy Noronha</h1>

      <div>
        <p className={styles.intro}>
          I'm a creator at heart. <br/>
          I stumbled into web and app development as a university student and turned it into a career.
        </p>
        <p className={styles.intro}>
          I have a deep passion for music and have worked on projects like <br/>
          <Link className={styles.link} href={urls.tronicDisease} target='_blank'>'tronicDisease'</Link>
          &nbsp;and&nbsp;
          <Link className={styles.link} href={urls.melAndTheDragon} target="_blank">'Mel and the Dragon'</Link>.
        </p>
      </div>

      <div className={styles.linksContainer}>
        <Link className={bottomLinkClassNames} href={urls.github} target="_blank">Github</Link>
        <Link className={bottomLinkClassNames} href={urls.blog}>Blog</Link>
        <Link className={bottomLinkClassNames} href={urls.linkedIn} target="_blank">LinkedIn</Link>
      </div>
    </main>
  )
}
