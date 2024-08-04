import React, { createContext, useContext, useEffect, useReducer } from "react";
import getQuestion from "../service/getQuestions";

const contextQuiz = createContext();
const Initial_Sata = {
  questions: [],
  status: "Loding",
  index: 0,
  userAnswer: null,
  points: 0,
  timer: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFaild":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "start", timer: state.questions.length * 30 };

    case "selectAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        userAnswer: action.payload,
        points:
          action.payload === question.correctOption
            ? question.points + state.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, userAnswer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...state,
        index: 0,
        points: 0,
        userAnswer: null,
        status: "ready",
      };
    case "timer":
      return {
        ...state,
        timer: state.timer - 1,
        status: state.timer === 0 ? "finish" : state.status,
      };
    default:
      throw new Error("action is not defind");
  }
}
function QuizProvider({ children }) {
  const [
    { status, questions, index, timer, userAnswer, points, highScore },
    dispatch,
  ] = useReducer(reducer, Initial_Sata);

  const numQuestions = questions.length;

  const sumPoint = questions
    .slice()
    .reduce((acc, curr) => acc + curr.points, 0);

  useEffect(() => {
    async function getData() {
      try {
        // const response = await fetch("http://localhost:9000/questions");
        // const data = await response.json();

        const data = await getQuestion();
        dispatch({ type: "dataRecived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFaild" });
      }
    }
    getData();
  }, []);

  return (
    <contextQuiz.Provider
      value={{
        status,
        questions,
        index,
        timer,
        userAnswer,
        points,
        highScore,
        dispatch,
        numQuestions,
        sumPoint,
      }}
    >
      {children}
    </contextQuiz.Provider>
  );
}
function useQuiz() {
  const context = useContext(contextQuiz);
  return context;
}
export { QuizProvider, useQuiz };
