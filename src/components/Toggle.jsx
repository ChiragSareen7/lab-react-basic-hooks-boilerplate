import React from 'react'
import { ToggleTheme } from '../App';

import { useContext } from 'react'

function Toggle() {
    const info=useContext(ToggleTheme)

    const style={
        backgroundColor : info?"black":"grey",
        color:info?"grey":"black"
    }

    const content='Welcome to my page';
  return (
    <div>
    <div style={style}>
    <useContext  content={content}/>
    </div>
    </div>
  )
}

export default Toggle
