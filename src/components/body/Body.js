import React from 'react'
import Certif from './Certif/Certif'
import Projects from './Personal/Projects'
import Skills from './skills/Skills'
import Education from './education/Education'

function Body() {
  const data1= ["Patience","communication","Problem solving","Adaptability","Accountability"]
  const data2= ["Arabic: native","Frensh: good","English: good"]
  return (
    <div>
        <Certif/>
        <Skills titre="languages" data={data2}/>
        <Projects/>
        <Skills titre="Soft Skills" data={data1}/>
        <Education/>
    </div>
  )
}

export default Body