import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Components
import DataTableList from "../../DataTable/DataTable";

import { motion } from "framer-motion";

//------------------------------------------------------------//

const ListEmployees = () => {
  
  return (
    <Container as={motion.div}
    className="employees__container"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth, transition: {duration: 0.05}}}
    >
      <h1>List Employees</h1>
      <Link to="/">
        <button className="goHome">Go Home</button>
      </Link>
      <DataTableList />
    </Container>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .goHome {
    width: 200px;
  }
`;

export default ListEmployees;
