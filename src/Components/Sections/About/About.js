import styles from './About.module.css'
import cabeca from '../../../assets/images/cabeca.png'
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const About = (props) => {
  const text = `Oi, sou Diego Nunes Reis, um desenvolvedor com mais de 8 anos de experiência. Atualmente, como Engenheiro de Software no Itaú Unibanco, desempenho um papel fundamental em projetos estratégicos, abrangendo a criação, modernização, manutenção e design de soluções voltadas para a web.
  Comprometido em elevar a qualidade e eficácia dos projetos, minha abordagem inclui as melhores práticas do desenvolvimento de software. Além do meu comprometimento técnico, aprecio música, tenho um carinho especial por animais e estou sempre em busca da xícara perfeita de café.`;

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