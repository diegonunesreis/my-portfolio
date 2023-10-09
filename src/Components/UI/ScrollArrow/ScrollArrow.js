import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ScrollArrow.module.css';

const ScrollArrow = (props) => {

  const iconStyles = `scroll-chevron ${styles.icon} ${props.animate && styles.animate}`;


  const scrollTo = (section) => {
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`${styles.container} ${props.className}`}>
      <a onClick={props.onClick}>
        <FontAwesomeIcon
          className={iconStyles}
          icon="fa-solid fa-chevron-down" />
      </a>
    </div>
  )
}
export default ScrollArrow;
