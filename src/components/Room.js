import React, { useEffect, useState } from "react";
import rooms from "../data/rooms";
import scream from "../assets/scream.mp3";
import creak from "../assets/door-creak.mp3";
import EscapeComplete from "./EscapeComplete";
const Room = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const [timeLeft, setTimeLeft] = useState(rooms[0].timeLimit);
  const [showClue, setShowClue] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [inventory, setInventory] = useState([]);
const [escaped, setEscaped] = useState(false);

  const room = rooms[currentRoomIndex];

  // Countdown timer
  useEffect(() => {
    if (solved || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          playScream();
          return 0;
        }
        if (prev === 11) setShowClue(true);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [solved, gameOver]);

  const playScream = () => {
    const audio = new Audio(scream);
    audio.play();
  };

  const playCreak = () => {
    const audio = new Audio(creak);
    audio.play();
  };

  const checkAnswer = () => {
    const correct = answer.toLowerCase().trim() === room.answer;
    const needsItem = room.itemRequired && !inventory.includes(room.itemRequired);

    if (correct && needsItem) {
      alert(`You need the "${room.itemRequired}" to escape this room!`);
      return;
    }

    if (correct) {
      playCreak();
      if (room.item) {
        setInventory((prev) => [...prev, room.item]);
        alert(`🧰 You found a ${room.item}!`);
      }
      setSolved(true);
      setTimeout(() => {
        goToNextRoom();
      }, 3000);
    } else {
      playScream();
      alert("Wrong answer... shadows whisper around you.");
    }
  };

  const goToNextRoom = () => {
    setAnswer("");
    setSolved(false);
    setShowClue(false);
    setGameOver(false);
    const next = currentRoomIndex + 1;
    if (next < rooms.length) {
  setCurrentRoomIndex(next);
  setTimeLeft(rooms[next].timeLimit);
} else {
    setEscaped(true);
}

};
if (escaped) {
  return <EscapeComplete />;
}


return (
    
    <div className="room-container">
      <h1>{room.title}</h1>
      <img src={room.image} alt={room.title} className="door-image" />

      <div className="inventory">
        <h3>Inventory:</h3>
        {inventory.length === 0 ? (
          <p>(Empty)</p>
        ) : (
          <ul>
            {inventory.map((item, i) => (
              <li key={i}>🔑 {item}</li>
            ))}
          </ul>
        )}
      </div>

      {!solved && !gameOver && (
        <>
          <p className="riddle">⏳ Time left: {timeLeft}s</p>
          <p className="riddle">{room.riddle}</p>
          {showClue && <p className="clue">🔍 Clue: {room.clue}</p>}
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="input"
            placeholder="Type your answer..."
          />
          <button onClick={checkAnswer} className="button">
            Submit
          </button>
        </>
      )}
      

      {solved && <p className="success">✅ Correct! Moving to next room...</p>}
      {gameOver && (
        <p className="riddle danger">💀 Time’s up. You're trapped forever.</p>
      )}
    </div>
    
  );
};

export default Room;
