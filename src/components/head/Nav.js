import React from 'react'
import './nav.css'
function Nav() {
  return (
    <div className='nav'>
        <ul className='ul'>
            <li>
                <a href="#per" >personal projects</a>
            </li>
            <li>
            <a href="#cer">CERTIFICATES</a>
            </li>
            <li>
            <a href="#edu">EDUCATION</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav