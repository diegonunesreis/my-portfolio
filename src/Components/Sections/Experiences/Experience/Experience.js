import styles from './Experience.module.css';

const Experience = (props) => {
  return (
    <div className={styles.experience__container}>
      <h3 className={styles.experience__title}>{props.title}</h3>
      <a href={props.companyUrl}
        target='_blank'
        rel='noreferrer'
        className={styles.experience__company}>
        {props.company}
      </a>
      <p>{`${props.startDate} - ${props.endDate}`}</p>
      <p className={styles.experience__description}>{props.children}</p>
    </div>
  )
}
export default Experience;