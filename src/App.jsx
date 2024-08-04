import React, { useEffect, useReducer } from "react";
import "./style.css";
import ReactImg from "./React_Logo_SVG.svg.png";
import Quiz from "./components/Quiz.jsx";
import Erorr from "./components/Erorr.jsx";
import Loding from "./components/Loding.jsx";
import StartPage from "./components/startScreen.jsx";
import Question from "./components/Question.jsx";
import Progress from "./components/Progress.jsx";
import Restart from "./components/Restart.jsx";
import Timer from "./components/Timer.jsx";
import { useQuiz } from "./context/QuizContext.jsx";
function App() {
  const{status,userAnswer}=useQuiz()
 
  return (
    <>
      <Header></Header>
      <Quiz>
        {status === "error" && <Erorr></Erorr>}
        {status === "Loding" && <Loding></Loding>}
        {status === "ready" && (
          <StartPage></StartPage>
        )}
        {status === "start" && (
          <>
            <Progress></Progress>
            <Question
              
            ></Question>
            <div className="down">
            <Timer></Timer>
              {userAnswer !== null ? (
                <NextButton></NextButton>
              ) : null}
              
            </div>
          </>
        )}

        {status === "finish" && (
          <Restart></Restart>
        )}
      </Quiz>
    </>
  );
}

function Header() {
  return (
    <header className="header-top">
      <div className="logo">
        <figure>
          <img src={ReactImg} alt="" />
        </figure>
      </div>
      <div className="logo-text">
        <h1>The React Quiz</h1>
      </div>
    </header>
  );
}
function NextButton() {
  const { dispatch, index, numQuestions:numQuestion }=useQuiz()
  
  return (
    <>
      {index < numQuestion - 1 ? (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn-next"
        >
          Next
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn-next"
        >
          Finish
        </button>
      )}
    </>
  );
}
export default App;
