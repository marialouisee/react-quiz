import React, { useContext } from 'react';
import {Link
  } from "react-router-dom";
import QuestionsContext from '../context/questionsContext';

const Result = () => {

    const {questionsArr, score  } = useContext(QuestionsContext)


    return (
        <div className='result'>
            {score > questionsArr.length*0.7 ?
                <div className='good'><p>Great, good work! <br/> {score} of {questionsArr.length} Wanna go again? <Link to='/'>NOW</Link></p></div> 
                : 
                <div className='doBetter'><p>well... ok. you can do better! I know it! <br/> {score} of {questionsArr.length} Lets try this again. <Link className='h' to='/'>NOW</Link></p></div> }
        </div>
    )
}

export default Result
