import * as React from "react"

import * as s from "../styles/Dots.css"

const colours: string[] = ["red", "blue", "yellow", "green", "purple", "violet"]

const randomNum: number = Math.ceil(Math.random() * 15)

const arr: any = []

const colourPicker = array => {
  return Math.floor(Math.random() * array.length)
}

for (let i = 0; i < randomNum; i++) {
  arr.push(
    <div
      className={s.dot}
      style={
        {
          backgroundColor: colours[colourPicker(colours)],
        } as React.CSSProperties
      }
    >
      <span>{i}</span>
    </div>
  )
}
const Dots = () => {
  return (
    <React.Fragment>
      <h1>and now for dots</h1>
      <div className={s.flexContainer}>{arr.map(content => content)}</div>
    </React.Fragment>
  )
}

// this is a test

export default Dots
