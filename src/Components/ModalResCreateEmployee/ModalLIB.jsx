import React from "react";
import styled from "styled-components";

//------------------------------------------------------------//

const ModalLIB = ({ onClose, children, isOpen }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <div className="overlay" onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose}>&#x2715;</button>
              {children}
            </ModalContainer>
          </div>
        </Container>
      )}
    </>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const Container = styled.div`
  z-index: 10;
  position: absolute;
  top: 65px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  min-width: 20vw;
  min-height: 15vh;
  background-color: #0a8128;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 10px 20px rgba(black, 0.2);
  -moz-box-shadow: 0 10px 20px rgba(black, 0.2);
  -ms-box-shadow: 0 10px 20px rgba(black, 0.2);
  -o-box-shadow: 0 10px 20px rgba(black, 0.2);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -12.5px;
    top: -12.5px;
    border: none;
    background-color: #fff;
    color: #000;
    height: 40px;
    width: 40px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }
`;

export default ModalLIB;
