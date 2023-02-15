import React,{useState} from 'react'
import './Navbar.css'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"

const Menu = () =>
{
  return (
    <>
  <p><a href="#home">Home</a></p>
              <p><a href="#wgpt">what Is GPT?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case study</a></p>
              <p><a href="#blog">Library</a></p>
  </>
  )
}

export default function Navbar() {
  let [toggle,setToggle] = useState(false);
  return (
    <div className='gpt3__navbar'>
       <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links-logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='gpt3__navbar-links-container'>
              <Menu />
            </div>
            <div className='gpt3__navbar-sign'>
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
            <div className='gpt3__navbar-menu'>
              {
                toggle?<RiCloseLine color="#fff" size={27} onClick={()=>{setToggle(false)}}/>:
                <RiMenu3Line color="#fff" size={27} onClick={()=>{setToggle(true)}}/>
              }
              {
                toggle && (
                  <div className='gpt3__navbar-menu-container scale-up-center'>
                    <div className='gpt3__navbar-menu-container-links'>
                        <Menu />
                        <div className='gpt3__navbar-menu-container-links-sign'>
                          <p>Sign In</p>
                          <button type='button'>Sign Up</button>
                        </div>
                    </div>
                  </div>
                )
              }
            </div>
       </div>
    </div>
  )
}
