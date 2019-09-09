//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, setHomeValue] = useState(0);
  const [awayValue, setAwayValue] = useState(0);

  const [presentTime, setPresentTime] = useState(0);

  const [color, setColor] = useState('teal');
  const styles = {
    backgroundColor: "#9ACD32"
  }

  function Both() {
    setHomeValue(homeValue + 1);
    setPresentTime(presentTime + 25);
    setColor(color);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">{presentTime}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        {/* <div className="homeButtons"> */}
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners.
          <button onClick ={() => setHomeValue(homeValue + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick ={() => setHomeValue(homeValue + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div> */}
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button onClick ={() => setHomeValue(homeValue + 7)} className="homeButtons__touchdown">Home Touchdown</button> */}
          <button onClick ={() => Both()}
          className="homeButtons__fieldGoal">Goal</button>
        </div>

        {/* <div className="awayButtons">
          <button onClick = {() => setAwayValue(awayValue + 7)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setAwayValue(awayValue + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div> */}

      <div className="awayButtons">
          {/* <button onClick = {() => setAwayValue(awayValue + 7)}className="awayButtons__touchdown">Away Touchdown</button> */}
          <button onClick = {() => setAwayValue(awayValue + 1)}className="awayButtons__fieldGoal">Goal</button>
        </div>

      </section>
    </div>
  );
}

export default App;
