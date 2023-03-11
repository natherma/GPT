import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'
import dropbox from '../../assets/dropbox.png'
import atlassian from '../../assets/atlassian.png'

export default function Brand() {
  return (
    <div className='gpt__brands section_padding'>
      <div>
      <img src={google} alt="google" />
      </div>
      <div>
      <img src={shopify} alt="shopify" />
      </div>
      <div>
      <img src={slack} alt="slack" />
      </div>
      <div>
      <img src={dropbox} alt="dropbox" />
      </div>
      <div>
      <img src={atlassian} alt="atlassian" />
      </div>
    </div>
  )
}
