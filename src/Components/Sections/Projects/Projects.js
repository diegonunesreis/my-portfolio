import Project from "./Project/Project";


const Projects = (props) => {
  const projects = [
    {
      id: 1,
      title: 'Github Profile Explorer',
      description: 'Github Profile Explorer é uma aplicação Angular que possibilita pesquisar perfis de usuários do Github e filtrá-los por nome, quantidade de estrelas, nome de repositório, dentre diversos outros filtros.',
      languages: ['TypeScript', 'HTML', 'CSS', 'JavaScript'],
      url: 'https://github.com/diegonunesreis/github-profile-explorer'
    },
    {
      id: 2,
      title: 'Running Tools',
      description: 'O Running Tools App consiste em um conjunto de ferramentas para corredores, como calculadora de ritmo, calculadora de frequência cardíaca alvo, taxa metabólica basal, entre outros recursos.',
      languages: ['TypeScript', 'HTML', 'CSS', 'JavaScript'],
      url: 'https://github.com/diegonunesreis/runner-tools'
    },
    {
      id: 3,
      title: 'Aprenda Ingles',
      description: 'Aplicativo Android para ensinar a pronunciar nomes de alguns animais em inglês, além de números de 0 a 9 e vogais.',
      languages: ['java'],
      url: 'https://github.com/diegonunesreis/AprendaIngles'
    }
  ]

  return (
    <section id='projects'>
      <h2>projetos</h2>
      {projects.map(p =>
        <Project
          key={p.id}
          title={p.title}
          description={p.description}
          languages={p.languages}
          url={p.url}
        />)}
    </section>
  )
}
export default Projects;