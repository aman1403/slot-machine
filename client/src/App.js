import React, { useEffect, useState } from "react";
import axios from "axios";

import * as s from "./App.styles";

import Machine from "./Components/Machine";
import Options from "./Components/Options";

function App() {
  const BASE_URL = `https://slot-machine-backend.herokuapp.com`;
  const [sessionId, setSessionId] = useState(null);

  const [message, setMessage] = useState("TRY OUT YOUR LUCK !!");
  const [credits, setCredits] = useState(10);
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(1);
  const [item3, setItem3] = useState(2);

  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/startGame`).then((res) => {
      const response = res.data.data;
      setSessionId(response.sessionId);
    });
  }, []);

  const closeGame = (msg) => {
    return new Promise((res) => {
      setMessage(msg);
      setTimeout(() => {
        window.close();
        res();
      }, 3000);
    });
  };

  const startLoaders = () => {
    setL1(true);
    setL2(true);
    setL3(true);
  };

  const stopLoaders = () => {
    return new Promise((resolve) => {
      setL1(false);
      setTimeout(() => {
        setL2(false);
      }, 1000);
      setTimeout(() => {
        setL3(false);
        resolve();
      }, 2000);
    });
  };

  const setItems = (i) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setItem1(i.item1);
        setItem2(i.item2);
        setItem3(i.item3);
        resolve();
      }, 500);
    });
  };

  const roll = async () => {
    return new Promise(async (resolve) => {
      startLoaders();
      setMessage("SPINNING ...");
      await axios.get(`${BASE_URL}/playGame/${sessionId}`, { origin: true, mode: "cors" }).then(async (res) => {
        const response = res.data;
        if (response.success) {
          const credits = response.data.credits;
          const { block1, block2, block3 } = res.data.items;
          await setItems({
            item1: block1,
            item2: block2,
            item3: block3,
          });
          await stopLoaders();
          setCredits(credits);
          if (block1 === block2 && block2 === block3) setMessage("YOU WIN");
          else if (credits < 1) closeGame("CREDITS FINISHED! GAME OVER");
          else setMessage("YOU LOSE");
        } else setMessage("SESSION ENDED :(");
        resolve();
      });
    });
  };

  const cashOut = async () => {
    await axios.get(`${BASE_URL}/endGame/${sessionId}`).then(async (res) => {
      console.log(res);
      if (res.data.success) {
        setCredits(res.data.earnedCredits);
        closeGame("YOUR CREDITS HAVE BEEN TRANSFERED. THANKS FOR PLAYING !!");
      } else {
        closeGame("SESSION ALREADY ENDED");
      }
    });
  };

  return (
    <s.App>
      <s.MainContainer>
        <Machine loaders={{ l1, l2, l3 }} items={{ item1, item2, item3 }} />
        <Options roll={roll} cashOut={cashOut} />
        <div
          style={{
            marginTop: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center", COLOR: "#44475B" }}>{message}</h1>
          <h2 style={{ textAlign: "center", COLOR: "#44475B" }}>CREDITS: {credits}</h2>
        </div>
      </s.MainContainer>
    </s.App>
  );
}

export default App;
