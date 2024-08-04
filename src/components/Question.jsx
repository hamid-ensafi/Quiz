import React from "react";
import { useQuiz } from "../context/QuizContext";

function Question() {
  const {questions,index}=useQuiz()
  return (
    <div className="question-content">
      <div className="status-question">
        <h4>{questions.at(index).question}</h4>
      </div>
      <Options></Options>
    </div>
  );
}
function Options() {
  const {questions, dispatch, userAnswer,index}=useQuiz()
  const hasQuestion = userAnswer !== null;
  return (
    <menu className="quiz-item">
      {questions[index].options.map((item, indexMap) => (
        <button
          disabled={hasQuestion}
          className={`${userAnswer === item ? "answer" : ""} ${
            hasQuestion
              ? questions[index].correctOption === item
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={indexMap}
          onClick={() => dispatch({ type: "selectAnswer", payload: item })}
        >
          {item}
        </button>
      ))}
    </menu>
  );
}
export default Question;
// items.correctAnswer == item && items.userAnswer != undefined) ? 'true' : (items.userAnswer != item ? '' : 'button'
