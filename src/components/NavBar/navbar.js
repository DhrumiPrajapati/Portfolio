import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo2.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Experience</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Education</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Contact</Link>
            </div>
            {/* <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Experience</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Education</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Contact</Link>
            </div> */}
            <button className='desktopMenuBtn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
            
            <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me</button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Experience</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Education</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
                {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients</Link> */}
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;