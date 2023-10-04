import Experience from './Experience/Experience';
import styles from './Experiences.module.css';
import { Timeline } from 'rsuite';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const Experiences = (props) => {

  const experiences = [
    {
      title: 'software engineer',
      company: 'itaú',
      companyUrl: 'https://www.itau.com.br/',
      startDate: 'abr 2022',
      endDate: 'now',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. In ut dui blandit, dignissim ex eget, elementum turpis. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra libero. Praesent eu tincidunt risus, ac hendrerit lacus. Pellentesque leo est, maximus sed orci ut, tempor consectetur tortor.'
    },
    {
      title: 'software engineer',
      company: 'avanade',
      companyUrl: 'https://www.avanade.com/',
      startDate: 'nov 2018',
      endDate: 'mar 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. In ut dui blandit, dignissim ex eget, elementum turpis. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra libero. Praesent eu tincidunt risus, ac hendrerit lacus. Pellentesque leo est, maximus sed orci ut, tempor consectetur tortor.'
    },
    {
      title: 'junior programming analyst',
      company: 'talent four',
      companyUrl: 'https://www.talentfour.com.br/',
      startDate: 'jan 2018',
      endDate: 'out 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. In ut dui blandit, dignissim ex eget, elementum turpis. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra libero. Praesent eu tincidunt risus, ac hendrerit lacus. Pellentesque leo est, maximus sed orci ut, tempor consectetur tortor.'
    },
    {
      title: 'support analyst',
      company: 'cob',
      companyUrl: 'https://cobdesantos.com/',
      startDate: 'out 2016',
      endDate: 'jan 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. In ut dui blandit, dignissim ex eget, elementum turpis. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra libero. Praesent eu tincidunt risus, ac hendrerit lacus. Pellentesque leo est, maximus sed orci ut, tempor consectetur tortor.'
    }
  ]

  return (
    <section id='experiences'>
      <h2 className={styles.experiences__title}>experiências</h2>
      <div className={styles.experiences__frame}>
        <Timeline align='alternate'>
          {
            experiences.map((xp, index) => {
              return (
                <Timeline.Item key={index}>
                  <Experience
                    title={xp.title}
                    company={xp.company}
                    companyUrl={xp.companyUrl}
                    startDate={xp.startDate}
                    endDate={xp.endDate}>
                    {xp.description}
                  </Experience>
                </Timeline.Item>
              )
            })
          }
        </Timeline>
      </div>
      <ScrollArrow className={styles.main__arrow} onClick={props.scrollNext} animate />
    </section>
  )
}
export default Experiences;