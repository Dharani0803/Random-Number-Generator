import { useState } from "react";

function RandomNumber() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [message, setMessage] = useState("No Random Number is Generated !");
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false);

  function rollDice(callback) {
    setLoading(true);
    setMessage(null);
    setRandomNumber(null);
    setAttempts(prev => prev + 1);

    setTimeout(() => {
      const random =
        Math.floor(Math.random() * (max - min + 1)) + Number(min);

      setRandomNumber(random);
      setLoading(false);
      setMessage(<span>The generated Random Number is {random}</span>);

      if (callback) callback(random);
    }, 2000);
  }

  function generateNumber() {
    rollDice();
  }

 function checkGuess() {
  if (!guess) {
    setMessage(<span className="warning">
      <i class="fa-solid fa-triangle-exclamation"></i> Enter your Guess</span>);
      return
  }

  rollDice((random) => {
    setAttempts(prev => prev + 1);

    if (Number(guess) === random) {
      setMessage(<span className="success"><i className="fa-solid fa-circle-check"></i> Congratulations you're right!</span>)
    } else {
      setMessage(<span className="error">
      <i class="fa-solid fa-circle-xmark"></i> Oops! The generated Random Number is {random}</span>);
    }
  });
}

  function reset() {
    setMin(1);
    setMax(10);
    setGuess("");
    setRandomNumber(null);
    setMessage("No Random Number is Generated !");
    setAttempts(0);
    setLoading(false);
  }

  return (
    <div className="generator">
    <div className="box">
      <h2>Guess the Number 🎯</h2>

      <div className="range">
        <div><label><b>Set the Min Limit : </b></label>
        <input  type="number" value={min} min="1" onChange={(e) => setMin(e.target.value)} placeholder="Min"/></div>
        <div><label><b>Set the Max Limit : </b></label>
        <input type="number" value={max} onChange={(e) => setMax(e.target.value)} placeholder="Max"/></div>
      </div>

      <div className="circle">
        {loading ? (<div className="rolling">🎲</div>) : randomNumber !== null ? 
        (<div className="number">{randomNumber}</div>) : (<div className="dice">🎲</div>)}
      </div>

      <button onClick={generateNumber} class="gen">Generate Random Number</button>

      <div class="guess">
      <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess"/>
      <button onClick={checkGuess}>Guess</button>
      </div>
      <button onClick={reset} class="res"><i class="fa-solid fa-arrow-rotate-left" ></i> Reset</button>
      <p class="total"><b>Total Dice Rolls: </b>{attempts}</p>

      {message && <p>{message}</p>}
    </div></div> );}

export default RandomNumber;