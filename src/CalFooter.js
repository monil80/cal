import React from 'react'

//With React Components, Parent Components can pass attributes to the inner components in the form of props. 
export default function AppFooter(props) {
    let css =
    {
        height: '18vh',
        color: 'green',
        backgroundColor: "rgb(255,0,0)",

    }
  return (
    <div className='text-center font-italic bg-info ' style={css}>
        <hr/>
        <p>&copy; All Rights Reserved under - {props.company}--{props.year}</p>
    </div>
  )
}