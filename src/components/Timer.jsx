import React, { useEffect } from 'react'
import { useQuiz } from '../context/QuizContext';

export default function Timer() {
  const{timer,dispatch}=useQuiz()

    useEffect(()=>{
        const setTimer=setInterval(() => {
            dispatch({type:'timer'})
        }, 1000);
        return ()=> clearInterval(setTimer)
    },[dispatch])
  return (
      <p>{timer/60<10&&'0'}{Math.floor(timer/60)}:{timer%60<9&&'0'}{timer%60}</p>
  )
}
