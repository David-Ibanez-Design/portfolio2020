/* Vendor imports */
import React, { useEffect, useState } from 'react';
import Tooltip from "../tooltip";
import style from './progress.module.scss'


const Progress = ({ target }) => {

    const [readingProgress, setReadingProgress] = useState(0);
    let [sections, setStatus] = useState([]);

    const scrollListener = () => {
      if (!target.current) {
        return;
        
      }  
      const element         = target.current;
      const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const sectionsCount   = target.current.childNodes[1].childNodes.length;

      function setStatus() {
        for (var i=0; i<sectionsCount; i++) {
            sections[i] = {
                name: target.current.childNodes[1].childNodes[i].dataset.title,
                id: target.current.childNodes[1].childNodes[i].attributes.id.value,
                clientHeight: target.current.childNodes[1].childNodes[i].clientHeight,
                offsetTop: target.current.childNodes[1].childNodes[i].offsetTop,
                width: (target.current.childNodes[1].childNodes[i].clientHeight/target.current.childNodes[1].clientHeight)*100
            };
        }
      }

      setStatus()
      
      if (windowScrollTop === 0) {
        return setReadingProgress(0);
      }
  
      if (windowScrollTop > totalHeight) {
        return setReadingProgress(100);
      }
    
      setReadingProgress((windowScrollTop / totalHeight) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    });

    return (

        <div className={`${style.container} ${readingProgress === 100 || readingProgress === 0 ? style.hide : ""} `}>
            <div className={style.progress} style={{width: `${readingProgress}%`}}></div>
           
         
                <div className={style.sections}>
                    {
                        Object.keys(sections).map((key) => {
                            return (
                                <>
                                <a 
                                    href={`#${sections[key].id}`}
                                    className={style.section} 
                                    style={{width: `${sections[key].width}%`}}
                                    data-tip 
                                    data-for={sections[key].id}
                                    >
                                    <span className={style.sectionInner} />
                                    <Tooltip place="top" targetId={sections[key].id} effect="float" >{sections[key].name}</Tooltip>

                                </a>
                                </>
                            )
                        }) 
                    } 
                </div> 
                <div className={style.trail} ></div>
        </div>

    )
        
  };

export default Progress;
