import React from 'react'
import Service from './Service';
import design from '../../assets/Services/designer.json';
import integration from '../../assets/Services/integration.json';
import maintenance from '../../assets/Services/website-design-animation.json';
import optimization from '../../assets/Services/optimization.json';
import responsive from '../../assets/Services/responsive.json';
import functionality from '../../assets/Services/code-dark.json'


const Services = () => {
  

  const services = [
    {
      id: 1,
      serviceName:"Designing and building websites.",
      animation: design,
    },
    {
      id: 2,
      serviceName:"Optimizing websites for search engines (SEO).",
      animation: optimization,
    },
    {
      id: 3,
      serviceName:"Creating and maintaining a website's visual appearance.",
      animation: maintenance,
    },
    {
      id: 4,
      serviceName:"Adding functionality to websites using programming languages such as HTML, CSS and Javascript",
      animation: functionality,
    },
    {
      id: 5,
      serviceName:"Ensuring that websites are responsive and work well on a variety of devices.",
      animation: responsive,
    },
    {
      id: 6,
      serviceName:"Integrating websites with other applications and databases.",
      animation: integration,
    }
   ]
  return (
    <div>
      <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">
        My Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10 h-16">
        {services.map((service, i) => <Service key={i} service={service}></Service>)
        
        }   
      </div>
    </div>
  )
}

export default Services