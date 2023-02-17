import React from 'react'
import './header.css'
import people from '../../assets/people.png' 
import ai from '../../assets/ai.png'

export default function Header() {
  return (
    <div className='gpt__header section_padding' id='Home'>
        <div className='gpt__header-content'>
            <h1 className='gradient_text'>
                Let's Build Something amazing with GPT-3 OpenAI
              </h1>
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
              <div className='gpt__header-content-input'>
              <input type="email" placeholder='Your Email Address' />
              <button type='button'>Get Started</button>
              </div>
              <div className='gpt__header-content-people'>
                <img src={people} alt="people" />
                <p>
                  1600 people requested accessna visit in last 24 hours
                </p>
              </div>
        </div>
        <div className='gpt__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}
