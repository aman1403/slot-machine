import styled from "@emotion/styled";

export const OuterContainer = styled.div`
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;

  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

export const RollButton = styled.button`
  padding: 20px;
  background-color: #00d09c;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  color: #fff;
  font-size: 25px;
  box-shadow: none;
  border: none;
  text-align: center;
  width: 150px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  &:disabled {
    cursor: not-allowed;
    background-color: #ecedef;
  }
`;

export const CashOut = styled.button`
  padding: 20px;
  font-weight: 500;
  border-radius: 4px;
  cursor: ${(p) => (p.disable ? "not-allowed" : "pointer")};
  background-color: ${(p) => (p.disable ? "#ecede" : "#eb5b3c")};
  white-space: nowrap;
  color: #fff;
  font-size: 25px;
  box-shadow: none;
  border: none;
  text-align: center;
  width: 150px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  transform: ${(p) => `translate(${p.tx}px, ${p.ty}px)`};
`;
