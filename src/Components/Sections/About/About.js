import styles from './About.module.css'
import cabeca from '../../../assets/images/cabeca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const About = (props) => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. In ut dui blandit, dignissim ex eget, elementum turpis. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra libero. Praesent eu tincidunt risus, ac hendrerit lacus. Pellentesque leo est, maximus sed orci ut, tempor consectetur tortor. Cras vitae ipsum at ex porta tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor pretium lacus eget finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut porta scelerisque libero, nec imperdiet sapien malesuada eget. Vivamus condimentum tellus lacus, tristique tincidunt eros fringilla finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

  return (
    <section id='about'>
      <div className={styles['grid-container']}>
        <div>
          <h2 className={styles['about__title']}>OI, EU SOU O DIEGO</h2>
          <p className={styles['about__text']}>{text}</p>
        </div>
        <img
          className={styles['about__image']}
          src={cabeca}
          alt='Author portrait' />
      </div>
      <ScrollArrow onClick={props.scrollNext} animate={false}/>
    </section>
  )
}
export default About;