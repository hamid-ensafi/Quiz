import React from "react";
import { useQuiz } from "../context/QuizContext";
function StartPage() {
  const{dispatch,numQuestions}=useQuiz()
  return(
    <div className="start-page">
        <h3>Welcome to The React Quiz </h3>
        <p>{numQuestions} Questions to test your react mastery </p>
        <button onClick={()=>dispatch({type:'start'})}>Let's Start !</button>
    </div>
  );
}
export default StartPage;
