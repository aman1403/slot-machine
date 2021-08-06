import React from "react";
import * as s from "./index.styles";
import RingLoader from "react-spinners/RingLoader";

const App = ({ loading, symbol }) => {
  return (
    <React.Fragment>
      {loading ? (
        <s.OuterContainer>
          <RingLoader color={"#5367FF"} />
        </s.OuterContainer>
      ) : (
        <s.OuterContainer>
          <h2>{symbol}</h2>
        </s.OuterContainer>
      )}
    </React.Fragment>
  );
};

export default App;
