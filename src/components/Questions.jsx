import React, {useState, useContext, useEffect } from 'react';
import {Link
  } from "react-router-dom";
import QuestionsContext from '../context/questionsContext';

const Questions = () => {

    const {questionsArr, score, setScore, currQuest, setCurrQuest} = useContext(QuestionsContext)
    const [submit, setSubmit] = useState(false)
    const [selected, setSelected] = useState([]);
    const [isDisabled, setIsDisabled] = useState({0: false,2: false,3: false,4: false,5: false})
   
    const handleSubmit= (e) => {
        e.preventDefault()
        setSubmit(true)

        if(JSON.stringify(selected) === JSON.stringify(questionsArr[currQuest].solutions)){
            setScore(score + 1)
        }

        setTimeout(()=>{
            setSelected([])
            setCurrQuest(currQuest + 1); 

            setIsDisabled({0: false,2: false,3: false,4: false,5: false}) 
            setSubmit(false)
                
        }, 100)
        
        e.target.reset()

    }
  
    const handleSelect = (e) => {
        console.log(e.target.id);
        setSelected( [...selected, +e.target.id])
        setIsDisabled({...isDisabled, [+e.target.id]: true})
    }
    useEffect(()=>{
        console.log(selected);
    },[selected])



    return (
        currQuest+1 <= questionsArr.length ? 
        <div className='questionsContainer'>
            <h1>Question {currQuest+1 } </h1>
            <div>
                <h3>{questionsArr[currQuest].question}</h3>
                <h4>{questionsArr[currQuest].code}</h4>
                <form onSubmit={handleSubmit}>
                     {questionsArr[currQuest].answers.map((answer, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" onClick ={handleSelect} id={index} disabled={isDisabled[index]} />
                                {submit? <label className={index == questionsArr[currQuest].solutions? "correct":"wrong"}>{answer.text}</label> : <label className=''>{answer.text}</label>}
                            </div>
                        )
                    })} <br/>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
        : 
        <div className='questionsContainer'>WOW! That's it. Wanna see your <Link className='result bounce' to='/result'>RESULTS?</Link></div>
    )
}

export default Questions
