import styles from './Project.module.css';

const Project = ({ title, description, languages, url }) => {
  return (
    <div className={styles.container}>
      <a href={url}
        target='_blank'
        rel='noreferrer'
        className={styles.title}>
        &lt;/&gt; {title}
      </a>
      <div className={styles['grid-container']}>
        <p className={styles['description']}>{description}</p>
        <div className={styles['flex-container']}>
          {languages.map((lang, index) =>
            <div
              className={styles.language__container}
              key={index}>
              {lang}
            </div>)}
        </div>
      </div>
    </div>
  )
}
export default Project;