import styles from './Posts.module.css';
import Post from './Post/Post';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';
import { gql, useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import imgCamaleon from '../../../assets/images/camaleon.jpg';
import imgRoad from '../../../assets/images/road.jpg';
import imgDoor from '../../../assets/images/yellow-door.jpg';


const POSTS_QUERY = gql`
query Publication {
  publication(host: "blog.diegonunes.dev") {
    isTeam
    title
    posts(first: 3) {
      edges {
        node {
          id
          title
          reactionCount
          publishedAt
          url
          coverImage { url }
        }
      }
    }
  }
}
`;
const CACHE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000; // Tempo máximo de armazenamento em milissegundos (7 dias)

const Posts = (props) => {

  const postsMock = [
    {
      id: 1,
      title: 'Angular: Implementando o Reenvio Automático de Requisições com Erro (backoff strategy)',
      likes: 10,
      date: 'Jul 20, 2023',
      image: imgCamaleon,
      url: 'https://blog.diegonunes.dev/angular-implementando-o-reenvio-automatico-de-requisicoes-com-erro'
    },
    {
      id: 2,
      title: 'Angular: Implementando o Reenvio Automático de Requisições com Erro (backoff strategy)',
      likes: 10,
      date: 'Jul 20, 2023',
      image: imgRoad,
      url: 'https://blog.diegonunes.dev/angular-implementando-o-reenvio-automatico-de-requisicoes-com-erro'
    },
    {
      id: 3,
      title: 'Angular: Implementando o Reenvio Automático de Requisições com Erro (backoff strategy)',
      likes: 10,
      date: 'Jul 20, 2023',
      image: imgDoor,
      url: 'https://blog.diegonunes.dev/angular-implementando-o-reenvio-automatico-de-requisicoes-com-erro'
    }
  ];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const isCacheValid = (timestamp) => {
    return Date.now() - timestamp < CACHE_EXPIRATION_TIME;
  };

  const client = useApolloClient();

  const getPosts = async () => {
    const cachedData = localStorage.getItem('hashnodePosts');

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);

      if (isCacheValid(timestamp)) {
        setPosts(data);
        return;
      }
    }

    try {
      const { data } = await client.query({
        query: POSTS_QUERY,
      });

      if (data) {
        const mappedData = data.publication.posts.edges.map((item) => {
          const dateObject = new Date(item.node.publishedAt);

          const formattedDate = dateObject.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });

          return {
            id: item.node.id,
            title: item.node.title,
            likes: item.node.reactionCount,
            date: formattedDate,
            image: item.node.coverImage.url,
            url: item.node.url
          }
        });

        setPosts(mappedData);

        const storageData = {
          data: mappedData,
          timestamp: Date.now(),
        };

        localStorage.setItem('hashnodePosts', JSON.stringify(storageData));
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <section id='posts'>
      <h2>publicações</h2>
      <div className={styles['grid-container']}>
        {posts.map((post) =>
          <Post
            key={post.id}
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