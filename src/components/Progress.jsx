import React from "react";
import { useQuiz } from "../context/QuizContext";
function Progress() {
  const{points,index,numQuestions:numQuestion,sumPoint,userAnswer}=useQuiz()
  const Percnt=100/numQuestion*(userAnswer!==null? index+1:index)
  
  return (
    <div className="progress-content">
      <span className="line-container">
        <span style={{width:`${Math.round(Percnt)}%`}}></span>
      </span>
      <div className="info-question">
        <div className="num-queez">
          <p>Question {index+1}/{numQuestion}</p>
        </div>

        <div className="point">
          <p>{points}/{sumPoint}</p>
        </div>
      </div>
    </div>
  );
}
export default Progress