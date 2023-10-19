import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <ul className={styles.tabs}>
        <li><a href='#'>&lt;/&gt; nunes</a></li>
      </ul>
      <ul className={styles.social}>
        <li><a href='mailto:hey@diegonunes.dev'>
          <FontAwesomeIcon icon="fa-regular fa-envelope" alt='email' />
        </a></li>
        <li>
          <a href='https://blog.diegonunes.dev/'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon="fa-brands fa-hashnode" alt='hashnode' />
          </a>
        </li>
        <li>
          <a href='https://github.com/diegonunesreis'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/diegonunesreis/'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;