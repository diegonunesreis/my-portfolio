import styles from './Posts.module.css';
import imgCamaleon from '../../../assets/images/camaleon.jpg';
import imgRoad from '../../../assets/images/road.jpg';
import imgDoor from '../../../assets/images/yellow-door.jpg';
import Post from './Post/Post';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const Posts = (props) => {

  const posts = [
    {
      title: 'Angular: Implementando o Reenvio Automático de Requisições com Erro (backoff strategy)',
      likes: 10,
      date: 'Jul 20, 2023',
      image: imgCamaleon,
      url: 'https://blog.diegonunes.dev/angular-implementando-o-reenvio-automatico-de-requisicoes-com-erro'
    },
    {
      title: 'Angular: Implementando o Reenvio Automático de Requisições com Erro (backoff strategy)',
      likes: 10,
      date: 'Jul 20, 2023',
      image: imgRoad,
      url: 'https://blog.diegonunes.dev/angular-implementando-o-reenvio-automatico-de-requisicoes-com-erro'
    },
    {
      title: 'Angular: Implementando o Reenvio Automático de Requisições com Erro (backoff strategy)',
      likes: 10,
      date: 'Jul 20, 2023',
      image: imgDoor,
      url: 'https://blog.diegonunes.dev/angular-implementando-o-reenvio-automatico-de-requisicoes-com-erro'
    }
  ]

  return (
    <section id='posts'>
      <h2>publicações</h2>
      <div className={styles['grid-container']}>
        {posts.map((post) =>
          <Post
            imgSrc={post.image}
            title={post.title}
            likes={post.likes}
            date={post.date}
            url={post.url} />
        )}
      </div>
      <ScrollArrow className={styles.main__arrow} onClick={props.scrollNext} />
    </section>
  )
}
export default Posts;