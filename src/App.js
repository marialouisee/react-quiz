import React ,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './style/main.scss'


import Header from './components/Header';
import Home from './components/Home';
import Quizz from './components/Quizz';
import Result from "./components/Result";
import QuestionsContext from './context/questionsContext'

import questions from './questions'

// import Particles from 'react-particles-js';


function App() {

  const questionsArrFromObj =  Object.values(questions);
  // send via context
  const [questionsArr, setQuestionsArr] = useState(questionsArrFromObj);
  const [score, setScore] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState(false)
  const [currQuest, setCurrQuest] = useState(0)

  // console.log(questionsArr);


  return (
    <Router>
      <div className="App">
        {/* <Particles style={{position:'absolute',top:'0',left:'0', zIndex: "-1"}} params={{ particles: {color: {value: '#fff'}, move: { speed: 0.2}}}}/> */}

          <Header/>
          <QuestionsContext.Provider value={{questionsArr, setQuestionsArr, score, setScore, selectAnswer, setSelectAnswer, currQuest, setCurrQuest}}>    
            <Switch>
                <Route path='/quiz'>   
                  <Quizz/>
                </Route>
                <Route path='/result'>
                  <Result/>
                </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch> 
          </QuestionsContext.Provider>
      </div>
    </Router>  
    );
}

export default App;
