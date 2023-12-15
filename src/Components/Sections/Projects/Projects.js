import { useEffect, useState } from "react";
import Project from "./Project/Project";
import githubService from "../../../services/githubService";

const CACHE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000; // Tempo máximo de armazenamento em milissegundos (7 dias)

const Projects = (props) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepoList();
  }, []);

  const cachedData = localStorage.getItem('githubRepos');

  const isCacheValid = (timestamp) => {
    return Date.now() - timestamp < CACHE_EXPIRATION_TIME;
  };

  const getRepoList = async () => {
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);

      if (isCacheValid(timestamp)) {
        setRepos(data);
        return;
      }
    }

    try {
      const data = await githubService.get('users/diegonunesreis/repos');

      const firstTen = data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

      const getProjectLanguage = async (projectName) => {
        return await githubService.get(`repos/diegonunesreis/${projectName}/languages`);
      }

      const addLanguage = async (obj) => {
        const result = await getProjectLanguage(obj.name);
        const languages = Object.keys(result);
        return { ...obj, languages };
      };

      const results = await Promise.all(firstTen.map(addLanguage));

      const storageData = {
        data: results,
        timestamp: Date.now(),
      };

      localStorage.setItem('githubRepos', JSON.stringify(storageData));

      setRepos(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id='projects'>
      <h2>projetos</h2>
      {Array.isArray(repos) && repos.length > 0 ? (
        repos.map(p => (
          <Project
            key={p.id}
            title={p.name}
            description={p.description}
            languages={p.languages}
            url={p.html_url}
          />))
      ) : (
        <p>Nenhum dado disponivel</p>
      )}
    </section>
  )
}
export default Projects;