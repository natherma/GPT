import React from 'react'
import './Navbar.css'
import {RiMenu3Line, RiClosein} from "react-icons/ri"
import logo from "../../assets/logo.svg"

export default function Navbar() {
  return (
    <div className='gpt3__navbar'>
       <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links-logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='gpt3__navbar-links-container'>
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt">what Is GPT?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case study</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className='gpt3__navbar-sign'>
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
       </div>
    </div>
  )
}
