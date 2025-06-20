import React, { useState } from "react";
import './JioHome.css';

function JioHome() {
  const Quations = [
    {
      Quation: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
      answer: 0
    },
    {
      Quation: "Who is making the Web standards?",
      options: ["Google", "The World Wide Web Consortium", "Mozilla", "Microsoft"],
      answer: 1
    },
    {
      Quation: "What does the z-index property do?",
      options: [" Sets the zoom level", "Controls the visibility", "Sets the stack order of elements ", "Sets text direction"],
      answer: 2
    },
    {
      Quation: "What does position: relative mean??",
      options: [" Element stays in normal flow", "Element is fixed to screen", "Element moves relative to its normal position", "Element is hidden"],
      answer: 2
    },
    {
      Quation: "What is the result of typeof null in JavaScript?",
      options: ["null", "object", "undefined", "number"],
      answer: 1
    },
    {
      Quation: "What is a closure in JavaScript?",
      options: ["A function returning another function", "A function with access to its own scope, parent scope, and global scope", " A class in JS", " A loop block"],
      answer: 1
    },
    {
      Quation: "What will this return? console.log([ ] + [ ]);",
      options: ["0", "[ ]", `" "`, "undefined"],
      answer: 2
    },
    {
      Quation: "What is JSX?",
      options: ["A CSS preprocessor", "A JavaScript framework", "A syntax extension for JavaScript", "None of the above"],
      answer: 2
    },
    {
      Quation: "What hook is used to manage state in a functional component?",
      options: ["useEffect", "useState", "useRef", " useReducer"],
      answer: 1
    },
    {
      Quation: "Which command is used to create a new React app",
      options: ["npm create react", " npm react-init", "npx new react-app", " create-react-app my-app "],
      answer: 3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const currentQuestion = Quations[currentIndex];
  const percentage = (score / Quations.length) * 100;
  const [isCompleted, setIsCompleted] = useState(false);

  let progressColor;
  if (percentage >= 80) {
    progressColor = 'green';
  } else if (percentage >= 50) {
    progressColor = 'orange';
  } else {
    progressColor = 'red';
  }

  const handleAnswerClick = (selectedIndex) => {
    if (answered) return;

    setSelectedOption(selectedIndex);
    setAnswered(true);

    if (selectedIndex === currentQuestion.answer) {
      setScore(score + 1);
    }

    // Move to next question after 1.2s
    setTimeout(() => {
      if (currentIndex < Quations.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setAnswered(false);
      }
       else {
        setIsCompleted(true);

      }
    }, 600);
  };

  return (
    <>
      <h1 className="mt-5 text-center text-danger bg-info">Welcome To Tech Quiz</h1>
      {isCompleted ? (
        <div className="text-center mt-5">
          <h2>  <span>{"\uD83C\uDF89"}</span>Quiz Completed! <span>{"\uD83C\uDF8A"}</span> </h2>
          <h3>Your Score: {score} / {Quations.length}</h3>
        </div>
      ) : (
        <>
          <progress
            value={score}
            max={Quations.length}
            className="w-50 py-3 mt-5 mx-auto d-block"
            style={{ accentColor: progressColor }}
          />

        </>
      )}
      <div className="techquize">
        <div className="container d-flex">
          <div className="quation">
            <p className="quizetechquation"><strong>Q{currentIndex + 1}:</strong> {currentQuestion.Quation}</p>
          </div>
          <div className="answer">
            <ul>
              {currentQuestion.options.map((opt, i) => {
                let className = "";
                if (answered) {
                  if (i === currentQuestion.answer) {
                    className = "correct";
                  } else if (i === selectedOption) {
                    className = "wrong";
                  }
                }
                return (
                  <li
                    key={i}
                    className={className}
                    onClick={() => handleAnswerClick(i)}
                    style={{ cursor: answered ? "not-allowed" : "pointer" }}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default JioHome;
