import "./App.css";
import { useState } from "react";

function App() {
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const questions = [
    {
      question: "Who was first winner of IPL?",
      options: { a: "MI", b: "RR", c: "CSK", d: "KKR" },
      answer: "RR",
    },
    {
      question: "Who was the winner of IPL 2023?",
      options: { a: "MI", b: "RCB", c: "CSK", d: "KKR" },
      answer: "CSK",
    },
    {
      question: "Who is cheered as 'Thala for a reason'?",
      options: {
        a: "Suresh Raina",
        b: "Virat Kohli",
        c: "MS Dhoni",
        d: "R Ashwin",
      },
      answer: "MS Dhoni",
    },
  ];

  const handleSelectedOption = (value) => {
    setSelectedOption(value);
    if (value === questions[currentQues].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowCorrectAnswer(true);

    setTimeout(nextQuestion, 1500);
  };

  const nextQuestion = () => {
    if (currentQues + 1 === questions.length) {
      setShowScore(true);
    } else {
      setCurrentQues((prevQues) => prevQues + 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQues(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
  };

  const getOptionClass = (value) => {
    if (!showCorrectAnswer) return "option";
    if (value === questions[currentQues].answer) return "option correct";
    if (value === selectedOption) return "option incorrect";
    return "option";
  };

  const { question, options } = questions[currentQues];

  return (
    <>
      {!showScore && (
        <div className="box">
          <div className="left">
            <div className="left_qNumber">
              <div>
                Question <span>{currentQues + 1}</span>/{questions.length}
              </div>
            </div>
            <div className="question">{question}</div>
          </div>
          <div className="right">
            {Object.entries(options).map(([key, value]) => (
              <div
                key={key}
                className={getOptionClass(value)}
                onClick={() => handleSelectedOption(value)}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
      {showScore && (
        <div className="box2">
          <div>
            Score: {score}/{questions.length}
          </div>
          <div onClick={handlePlayAgain}>
            <button>Play Again</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
