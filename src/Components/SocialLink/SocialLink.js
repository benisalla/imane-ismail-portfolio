import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import './SocialLink.css'

function SocialLink({ linkedin, gmail, github, slack }) {
  return (
    <div className="icons">


      <div className='icons-rows'>
        <div className="icon">
          <a href={linkedin} >
            <AiFillLinkedin className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
        <div className="icon">
          <a href={linkedin} >
            <SiGmail className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
        <div className="icon">
          <a href={linkedin} >
            <BsGithub className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
        <div className="icon">
          <a href={linkedin}>
            <BsSlack className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
      </div>


{/* 
      <div className='icons-rows'>
        <div className="icon">
          <a href={linkedin}>
            <AiFillLinkedin className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
        <div className="icon">
          <a href={linkedin} >
            <SiGmail className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
        <div className="icon">
          <a href={linkedin}>
            <BsGithub className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
      </div>


      <div className='icons-rows'>
        <div className="icon">
          <a href={linkedin} >
            <AiFillLinkedin className='icon-core' />
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
      </div> */}


    </div>
  )
}

export default SocialLink;
