import React from 'react'
import './projects.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img1.jpg'
import IMG6 from '../../assets/img1.jpg'

const data = [
  {  
    id: 1,
    image: IMG1,
    title: 'qwqw',
    github: 'https://github.com',
    //demo: 
  },
  {  
    id: 2,
    image: IMG2,
    title: 'sdfvfvdfhtr',
    github: 'https://github.com',
    //demo: ;
  },
  {  
    id: 3,
    image: IMG3,
    title: 'asfewf',
    github: 'https://github.com',
    //demo: ;
  },
  {  
    id: 4,
    image: IMG4,
    title: 'sffrg',
    github: 'https://github.com',
    //demo: ;
  },
  {  
    id: 5,
    image: IMG5,
    title: 'asdfhhg',
    github: 'https://github.com',
    //demo: ;
  },
  {  
    id: 6,
    image: IMG6,
    title: 'dfghgj',
    github: 'https://github.com',
    //demo: ;
  }
]

const Projects = () => {
  return (
    <section id = 'projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>{
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='projects__item'>
              <div className='projects__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='projects__item-cta'>
                <a href={github} className='btn' target= '_blank'>Github</a>
                <a href='https://github.com' className='btn'>Github</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}
export default Projects;