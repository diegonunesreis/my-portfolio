import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Post.module.css';

const Post = ({ title, imgSrc, likes, date, url }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className={styles.img__container}>
      <img src={imgSrc} alt='first post' />
      <div className={styles['overlay-container']}>
        <figcaption>{title}</figcaption>
        <div className={styles.footer}>
          <FontAwesomeIcon className={styles.footer__heart} icon="fa-solid fa-heart" />
          <span className={styles.footer__likes}>{likes}</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  )
}
export default Post;