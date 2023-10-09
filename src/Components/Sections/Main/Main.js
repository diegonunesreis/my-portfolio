import React from 'react';
import styles from './Main.module.css';
import { useRef } from 'react';
import Typed from 'typed.js';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const Main = (props) => {
  const tw = useRef(null);

  React.useEffect(() => {
    const typed = new Typed(tw.current, {
      strings: ['full-stack dev',
        'coffee connoisseur',
        'software engineer',
        'amatheur athlete',
        'computer scientist',
        'music lover'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id='main' className={styles.main}>
      <div className={styles.flex}>
        <h1 className={styles.main__title}>&lt;/&gt; diegonunes.dev</h1>
        <div className={styles['type-writer']}>
          <span ref={tw}></span>
        </div>
        <ScrollArrow className={styles.main__arrow} onClick={props.scrollNext} animate />
      </div>
    </section>
  )

}
export default Main;