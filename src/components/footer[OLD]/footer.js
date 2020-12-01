/* Vendor imports */
import React from 'react'
import { FaDribbble, FaLinkedin } from 'react-icons/fa'
/* App imports */
import style from './footer.module.scss'
import Config from '../../../../config'
import Buttons from '../../../components/button'
import Tooltip from "../../tooltip";

const Footer = () => (
  <div className={style.container}>
      <div className={style.innerContainer}>
        <h4>Get In Touch</h4>
        <h1>Let’s work together</h1>
        <p className={style.outro}>
          I’m currently looking to join a company that trusts the design process to deliver meaningful changes to their customers.
        </p>
        <Buttons destination="external" to={`mailto:${Config.email}`} buttonStyle="primary">Contact me</Buttons>
        <ul className={style.socials}>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.dribbble}
              data-tip 
              data-for="social1"
            >
              <FaDribbble size="16" />
              <Tooltip targetId="social1" place="top" effect="solid" >
                View my Dribbble profile
              </Tooltip>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.linkedin}
              data-tip 
              data-for="social2"
            >
              <FaLinkedin size="16" />
              <Tooltip targetId="social2" place="top" effect="solid" >
                View my Linkedin profile
              </Tooltip>
            </a>
          </li>
        </ul>
        <p className={style.legals}>© 2020 All rights reserved.</p>
      </div>
  </div>
)

export default Footer
