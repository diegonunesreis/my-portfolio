import Experience from './Experience/Experience';
import styles from './Experiences.module.css';
import { Timeline } from 'rsuite';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';
import { useEffect, useState } from 'react';

const Experiences = (props) => {

  const experiences = [
    {
      id: 1,
      title: 'software engineer',
      company: 'itaú',
      companyUrl: 'https://www.itau.com.br/',
      startDate: 'abr 2022',
      endDate: 'now',
      description: 'No Itaú, o maior banco da América Latina, desempenho um papel crucial em projetos estratégicos, atuando diretamente na migração e modernização de sistemas legados para a nuvem AWS. Além disso, destaco minha participação no desenvolvimento do front-end de um inovador sistema de faturamento de cotas de Consórcio. Esse sistema impactou positivamente milhares de clientes, reduzindo significativamente o tempo necessário para faturar e praticamente eliminando incidentes relacionados à jornada de faturamento. Ativamente envolvido no desenvolvimento de novos sistemas, aplico minha expertise em .NET Framework, C#, Angular, Node.js e diversos serviços AWS para criar soluções robustas e eficientes. Colaborando com equipes multidisciplinares, garanto a integração perfeita e compatibilidade entre componentes e sistemas, otimizando o desempenho das aplicações e aprimorando a experiência do usuário. Minha abordagem segue as melhores práticas do desenvolvimento de software, incorporando revisões de código, testes e documentação abrangente.'
    },
    {
      id: 2,
      title: 'software engineer',
      company: 'avanade',
      companyUrl: 'https://www.avanade.com/',
      startDate: 'nov 2018',
      endDate: 'mar 2022',
      description: 'Contribuí de forma significativa em diversos projetos, como o desenvolvimento de uma plataforma de reconciliação financeira na Natura, utilizando Angular 11 no front-end e .NET Core 3.0 e SQL Server no back-end. Na Recovery, destaquei-me no aprimoramento do sistema de renegociação de dívidas com React.js, .NET Framework e SQL Server. No Itaú Bank, participei ativamente em dois projetos-chave, desenvolvendo plataformas de renegociação de dívidas e SaaS para integração de parceiros. Na Mapfre Insurance, contribuí com suporte e melhorias em sistemas de cotação de seguros, utilizando ASP.NET, Java Server Faces, Microsoft SQL Server e Oracle PL/SQL.'
    },
    {
      id: 3,
      title: 'junior programming analyst',
      company: 'talent four',
      companyUrl: 'https://www.talentfour.com.br/',
      startDate: 'jan 2018',
      endDate: 'out 2018',
      description: 'Na Talent Four Consulting, trabalhei diretamente com Boehringer Ingelheim, concentrando-me em ajustes de sistemas, automação de processos e migração de sistemas legados. Destaco o sucesso em aprimoramentos e otimizações do sistema usando ASP.NET Framework, SQL Server e Oracle SQL. Contribuí na transição eficiente de sistemas legados para tecnologias modernas, melhorando o desempenho do sistema. Além disso, automatizei o processo de marcação de ponto integrando leitores de crachá RFID, simplificando um processo manual e aliviando a carga de trabalho do setor de recursos humanos.'
    },
    {
      id: 3,
      title: 'support analyst',
      company: 'cob',
      companyUrl: 'https://cobdesantos.com/',
      startDate: 'out 2016',
      endDate: 'jan 2018',
      description: 'Na COB, uma empresa que desenvolve e mantém seu próprio software de cobrança, atuei em diversas frentes, incluindo o atendimento ao cliente, fornecendo suporte, e realizando a instalação e configuração de servidores IIS para os clientes. Participei ativamente na análise de bugs, documentação de processos, correções e melhorias no sistema. Destaco ainda a contribuição no desenvolvimento de novos scripts de relatórios no SQL Server.'
    }
  ]

  const [highResolution, setHighResolution] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const checkResolution = () => {
      setHighResolution(mediaQuery.matches);
    };
    checkResolution();

    mediaQuery.addEventListener('change', checkResolution);
    return () => {
      mediaQuery.removeEventListener('change', checkResolution);
    };
  }, []);

  const aligment = highResolution ? 'alternate' : 'left';

  return (
    <section id='experiences'>
      <h2 className={styles.experiences__title}>experiências</h2>
      <div className={styles.experiences__frame}>
        <Timeline align={aligment}>
          {
            experiences.map((xp, index) => {
              return (
                <Timeline.Item key={index}>
                  <Experience
                    key={xp.id}
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
      <ScrollArrow className={styles.main__arrow} onClick={props.scrollNext} />
    </section>
  )
}
export default Experiences;