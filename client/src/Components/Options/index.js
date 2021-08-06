import React, { useState } from "react";
import * as s from "./Options.styles";

export default function Options({ roll, cashOut }) {
  const [disable, setDisable] = useState(false);
  const [disableCashOut, setDisableCashOut] = useState(false);
  const [tx, settx] = useState(0);
  const [ty, setty] = useState(0);

  const hoverHandler = (event) => {
    var d = Math.random();
    if (event.type === "mouseover") {
      if (d < 0.5) {
        const distA = Math.floor(Math.random() * (300 - 1));
        settx(distA);
        setty(Math.floor(Math.sqrt(300 * 300 - distA * distA)));
      } else if (d < 0.9) {
        setDisableCashOut(true);
      } else console.log("Amount be Cashed");
    } else if (event.type === "mouseout") {
      if (tx !== 0 || ty !== 0) {
        settx(0);
        setty(0);
      }
      if (disableCashOut) {
        setDisableCashOut(false);
      }
    }
  };

  return (
    <s.OuterContainer>
      <s.RollButton
        onClick={async () => {
          setDisable(true);
          await roll();
          setDisable(false);
        }}
        disabled={disable}
      >
        Roll
      </s.RollButton>
      <div onMouseOver={hoverHandler} onMouseOut={hoverHandler}>
        <s.CashOut
          onClick={() => {
            if (!disableCashOut) cashOut();
          }}
          tx={tx}
          ty={ty}
          disable={disableCashOut}
        >
          CashOut
        </s.CashOut>
      </div>
    </s.OuterContainer>
  );
}
