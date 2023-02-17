import React from 'react';

const Projects = ({ project }) => {
  const {portfolioName, portfolioWebsite, portfolioPicture, portfolioDescription} = project
    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-xl ">
  <figure>
    <img src={portfolioPicture} alt={portfolioName}/>
    </figure>
  <div className="card-body">
    <h2 className="card-title">{portfolioName}</h2>
    <p>{portfolioDescription}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href={portfolioWebsite}>Live Link</a></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Projects