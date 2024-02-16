
import React, { useState, useEffect } from "react";
import "../App.css";

function UseState() {
  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(1);

  useEffect(() => {
    alert(`something changed ${currAge}`);
  }, [currAge]);
  
  const handleAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  const handleSib = () => {
    setSib(prevSib => prevSib + 1);
  };

  return (
    <div className="container">
      <h3 className="heading">My Current Age is {currAge}</h3>
      <h4 className="siblings">My siblings {currSib}</h4>

      <button onClick={handleAge} className="button">Get Older</button>
      <button onClick={handleSib} className="button">Get more Sib</button>
    </div>
  );
}

export default UseState;
