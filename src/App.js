import React from "react";
import "./App.css";

function App() {
  const [game, setGame] = React.useState({
    questions: "",
    answer: "",
  });
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  function newGame() {
    const randomNumber = Math.floor(Math.random() * game.length);
    const question = game[randomNumber].question;
    setGame((prevGame) => ({
      ...prevGame,
      questions: question,
    }));
  }

  console.log(questions);

  return (
    <div>
      <h1>Quizzical Game</h1>
      {questions.map((question) => (
        <div>
          <h3>{question.question}</h3>
          <div>
            {question.incorrect_answers
              .concat(question.correct_answer)
              .map((answer) => (
                <h4>{answer}</h4>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
