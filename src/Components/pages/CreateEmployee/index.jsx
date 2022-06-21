import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Components
import FormCreateEmployee from "../../FormCreateEmployee";

import { motion } from "framer-motion";

//------------------------------------------------------------//

const CreateEmployee = () => {

  return (
    <MotionContainer as={motion.div}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <Logo>
        <img src="./images/logo-wealth-health.png" alt="Logo Wealth Health" />
      </Logo>
      <Container>
        <Link to="/employee-table">
          <button>View current employee list</button>
        </Link>
        <h2>Create Employee</h2>
        <FormCreateEmployee />
      </Container>
    </MotionContainer>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const MotionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-top: 20px;
    --typography-spacing-vertical: 0;
  }
  label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
  }
`;

export default CreateEmployee;
