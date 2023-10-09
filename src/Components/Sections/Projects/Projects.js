import Project from "./Project/Project";


const Projects = (props) => {
  const projects = [
    {
      id: 1,
      title: 'lorem ipsum',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra li...',
      languages: ['java'],
      url: 'https://github.com/diegonunesreis/github-profile-explorer'
    },
    {
      id: 2,
      title: 'lorem ipsum',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra li...',
      languages: ['typescript', 'CSS', 'SCSS', 'HTML', 'javascript'],
      url: 'https://github.com/diegonunesreis/github-profile-explorer'
    },
    {
      id: 3,
      title: 'lorem ipsum',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam vitae leo iaculis, ut tincidunt tellus auctor. Mauris fringilla quam sit amet nunc iaculis accumsan. Nam mauris diam, ullamcorper id ligula ac, ultricies viverra li...',
      languages: ['typescript', 'CSS', 'javascript'],
      url: 'https://github.com/diegonunesreis/github-profile-explorer'
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