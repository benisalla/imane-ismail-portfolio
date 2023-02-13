import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BsSlack} from 'react-icons/bs'
import './SocialLink.css'

function SocialLink({linkedin, gmail, github, slack}) {
  return (
    <div className="icons">
        <a href={linkedin}><AiFillLinkedin className="icon"/></a>
        <a href={gmail}><SiGmail  className="icon"/></a>
        <a href={github}><BsGithub className="icon"/></a>
        <a href={slack}><BsSlack className="icon"/></a>
    </div>
  )
}

export default SocialLink;
