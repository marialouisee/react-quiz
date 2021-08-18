import React, {useContext} from 'react';
import QuestionsContext from '../context/questionsContext';
import Questions from './Questions';

const Quizz = () => {
    
    const {questionsArr, currQuest} = useContext(QuestionsContext)
    return (
        <div className='quizContainer'>
            <div>
                {currQuest+1 > questionsArr.length? '': <p>Question: {currQuest+1}/{questionsArr.length}</p>}
            </div>
            <Questions/> 
            
        </div>
    )
}

export default Quizz
