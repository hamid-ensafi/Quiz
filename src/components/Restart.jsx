import React from "react";
import { useQuiz } from "../context/QuizContext";
// dispatch={dispatch}
//             points={points}
//             sumPoint={sumPoint}
//             highScore={highScore}
function Restart() {
  const{dispatch,sumPoint,points,highScore }=useQuiz()

  const Percnt =Math.ceil((points/sumPoint )*100)
 
 
  let emojy;
  if (Percnt === 100) emojy = "🎖️";
  if (Percnt < 100 && Percnt >= 80) emojy = "🍆";
  if (Percnt < 80 && Percnt >= 50) emojy = "🚨";
  return (
    <div className="restart-container">
      <div className="restart-content">
        <p>
          {emojy} your scored {points} out of {sumPoint} {Percnt}%
        </p>
        <p>high score is {highScore} </p>
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="btn-next"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
export default Restart;
