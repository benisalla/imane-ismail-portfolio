import { Link } from '@mui/material';
import {useState} from 'react';
import { AiFillHome } from 'react-icons/ai'
import {HiUsers} from 'react-icons/hi'
import {IoMdCodeWorking} from 'react-icons/io'
import {SiSkillshare} from 'react-icons/si'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import './sidebar.css'

function Sidebar() {

  const[active,setActive] = useState(false);
 const Active=()=>{
  setActive(!active);
 }
  return (
    <div className={active ?'header': 'header_mobile'} >

      <div className='menu-icon ' onClick={Active}>
        {!active ? <AiOutlineMenu className='menu'/> : <GrClose  className='menu'/>}
      </div>
    <nav>
      <ul className={active?'items' : 'items icons'}>
        <li>
          <AiFillHome className='icon'/>
          <Link to='/'>Home</Link>
        </li>


        <li>
          <HiUsers className='icon'/>
          <Link to='/'>About us</Link>
        </li>

        <li>
          <IoMdCodeWorking className='icon'/>
          <Link to='/'>Project</Link>
        </li>

        <li>
          <SiSkillshare className='icon'/>
          <Link to='/'>Skills</Link>
        </li>

        
        <li>
          <IoMdContact className='icon'/>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Sidebar