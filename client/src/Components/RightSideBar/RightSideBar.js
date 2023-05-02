import React from 'react'
import Widget from "./Widget"
import WidgetTags from "./WidgetTags"
import "./RightSideBar.css"

const RightSideBar = () => {
  return (
    <div>
  <aside className='right-sideBar'>
    <WidgetTags />
    <Widget />
  </aside>
    </div>
  )
}

export default RightSideBar
