/* Vendor imports */
import React from 'react'
/* App imports */
import ReactTooltip from "react-tooltip";
import style from './tooltip.module.scss'

const Tooltip = ({ targetId, place, effect, offset, hidePointer, children }) => {
    return (
        <ReactTooltip 
            className={`
                ${style.tooltipContainer} 
                ${hidePointer ? style.hidePointer : ""} `} 
            id={targetId} 
            place={place} 
            insecure={true}
            effect={effect}
            offset={offset}
            >
         {children}   
        </ReactTooltip>
    )   
}

export default Tooltip