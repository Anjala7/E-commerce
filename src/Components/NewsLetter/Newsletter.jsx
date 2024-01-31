import React from 'react'

import './NewsLetter.css'
export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your E-mail</h1>
        <p>Subscribe to our NewsLetter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}
