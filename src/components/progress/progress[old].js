/* Vendor imports */
import React, { useEffect, useState } from 'react';
import style from './progress.module.scss'

const Progress = ({ target }) => {

 
    const [readingProgress, setReadingProgress] = useState(0);
    const scrollListener = () => {
      if (!target.current) {
        return;
      }



      const element         = target.current;
      const sectionsCount   = target.current.childNodes[1].childNodes.length;
      const overviewHeight   = target.current.childNodes[0].clientHeight;
      const sectionsTotalHeight   = target.current.clientHeight - overviewHeight;
   
      const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      var title = [];
      for (var i=0; i<sectionsCount; i++) {
          title[i] = {
              name: target.current.childNodes[1].childNodes[i].dataset.title,
              clientHeight: target.current.childNodes[1].childNodes[i].clientHeight,
              offsetTop: target.current.childNodes[1].childNodes[i].offsetTop,
              width: (target.current.childNodes[1].childNodes[i].clientHeight/target.current.childNodes[1].clientHeight)*100
          };
      }

      var testTotal = 0
      for (var i=0; i<sectionsCount; i++) {
        testTotal = testTotal + title[i].width
    }

      console.log(title)

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
                    Object.keys(title).map((key) => {

                        <div key={key} className={style.section} style={{width: `${title[key].width}%`}}>

                        </div>
                    }) 
                } 
            </div>        
          
        </div>

    )
        
  };

export default Progress;
