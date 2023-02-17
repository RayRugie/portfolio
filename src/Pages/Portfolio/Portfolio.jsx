import React from 'react';
import Projects from './Projects';
import Metabnb from '../../assets/Portfolio/metabnb.png';
import FitClub from '../../assets/Portfolio/FitClub.png';
import Linktree from '../../assets/Portfolio/linktree.png'

const Portfolio = () => {
    const projects = [
      {
        id: 1,
        portfolioPicture: Metabnb,
        portfolioName: "Metabnb",
        portfolioDescription: "A MetaBNB clone site",
        portfolioWebsite:"https://stellar-liger-8a71d8.netlify.app/"
      },
      {
        id: 2,
        portfolioPicture: FitClub,
        portfolioName: "FitClub",
        portfolioDescription: "A Gym Website ",
        portfolioWebsite:"https://fitclubrugiecode.pages.dev/"
      },
      {
        id: 3,
        portfolioPicture: Linktree,
        portfolioName: "Linktree",
        portfolioDescription: "A Linktree clone",
        portfolioWebsite:"https://gregarious-salamander-83a48b.netlify.app/"
      }
    ]
    return (
        <div className='top-80 -bottom-96 pt-[80px] mt-96'>
            <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10 mt-96">
        My Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10 h-16">
        {projects.map((project, i) => (
         <Projects key={i} project={project}></Projects>))
        
        }   
      </div>
        </div>
    );
};

export default Portfolio