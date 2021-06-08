/* Vendor imports */
import React, {useEffect,useState, useRef} from 'react'
/* App imports */
import style from './toc.module.scss'
import Utils from '../../utils'

const Toc = ({ headings }) => {

  // Check if server or client is rendering
  const hasWindow = (typeof window !== 'undefined') ? true : false;
  const [showScroll, setShowScroll] = useState(false)
  const [activeId, setActiveId] = React.useState();


  const checkScrollTop = () => {

    const extraMargin = 517 + 390 // (footer + suggested art);
    const bottom = document.documentElement.scrollHeight - extraMargin
    const currentScroll = Math.ceil(window.innerHeight + window.pageYOffset)

    if(!showScroll && currentScroll < bottom && window.pageYOffset > 1000){
      setShowScroll(true)
    } else if (showScroll && (( window.pageYOffset < 1000) || currentScroll > bottom)){
      setShowScroll(false)
    }

  };

  if(hasWindow) {window.addEventListener('scroll', checkScrollTop)}

  const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef({});

    useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);
  
        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
        });
  
        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);
  
        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );
          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };
  
      const observer = new IntersectionObserver(callback, {
        rootMargin: "0px 0px -40% 0px"
      });
  
      const headingElements = Array.from(document.querySelectorAll("h4"));
      console.log(headingElements)

      headingElements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }, [setActiveId]);
  };

  useIntersectionObserver(setActiveId);

  return(
   <ul className={style.toc} style={{opacity: showScroll ? '1' : '0'}}>
    {headings.map((heading, index) => (
      <li key={index}>
        <a href={Utils.getAnchor(heading.value, true)} className={ Utils.getAnchor(heading.value) === activeId ? style.active : "" }>
          {heading.value}
        </a>
      </li>
    ))}
   </ul>
  )

}


export default Toc
