import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <>
      <Title>😨 Page not found !</Title>
    </>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const Title = styled.h1`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
