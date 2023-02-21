import React from 'react'

export default function CalHeader() {
    let css =
    {
        height: '18vh',
        color: 'green',
        backgroundColor: "rgb(255,0,0)",

    }

    return (
        <>


            <h1 id='head' className='text-center font-italic bg-info ' style={css} >Welcome to React Based Calculator </h1>
            <hr />



        </>
    )
}
