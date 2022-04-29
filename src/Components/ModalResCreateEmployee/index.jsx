import React from "react";
import styled from "styled-components";

const Modal = ({ content, closeModal, modalIsOpen }) => {
  return (
    <>
      {modalIsOpen && (
        <Container>
          <div className="overlay" onClick={closeModal}></div>
          <ModalContainer>
            <button onClick={closeModal}>&#x2715;</button>
            <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM160 176h64v64C224 248.8 231.2 256 240 256h64C312.8 256 320 248.8 320 240v-64h64c8.836 0 16-7.164 16-16V96c0-8.838-7.164-16-16-16h-64v-64C320 7.162 312.8 0 304 0h-64C231.2 0 224 7.162 224 16v64H160C151.2 80 144 87.16 144 96v64C144 168.8 151.2 176 160 176z"/></svg>{content}</h3>
          </ModalContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  z-index: 10;
  position: absolute;
  width: 100vw;
  height: 100vh;
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
    position: absolute;
    right: -12.5px;
    top: -12.5px;
    border: none;
    background-color: #fff;
    color: #000;
    height: 25px;
    width: 25px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  h3 {
      display: flex;

      & svg {
        fill: #fff;
        width: 20px;
        margin-right: 10px;
      }
  }
`;
export default Modal;
