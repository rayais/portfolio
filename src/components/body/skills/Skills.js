import React from 'react'
import './skills.css'

function Skills({titre,data}) {
    
    
    console.log(titre)
    
  return (
    <div className='softskill'>
        <h1 className='softtit'>{titre}</h1>
      <ul className='skilllist'>
        {
            data.map((e,i)=>
                <li key={i+1}>{e}</li>
            )
        }
      </ul>
    </div>
  );
}

export default Skills

   