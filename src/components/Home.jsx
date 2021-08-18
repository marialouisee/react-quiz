import React from 'react'

import {
    Link
  } from "react-router-dom";
const Home = () => {
    return (
        <div className='home'>
            <h3> Hello world! Let's test your knowledge of HTML, CSS and JavaScript.</h3>
            <h2 className='warning'>WARNING! ONCE AN ANSWER IS SELECTED, THERE IS NO WAY BACK! </h2>
            <Link to='/quiz'><button>Let's do this!</button></Link>
        </div>
    )
}

export default Home

