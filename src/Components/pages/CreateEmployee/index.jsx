import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FromCreateEmployee from "../../FormCreateEmployee";

const CreateEmployee = () => {

  return (
    <>
      <Title>
        <img src="./images/logo-wealth-health.png" alt="Logo Wealth Health" />
      </Title>
      <Container>
        <Link to="/employee-table">
          <button>View current employee list</button>
        </Link>
        <h2>Create Employee</h2>
        <FromCreateEmployee />
      </Container>
    </>
  );
};

const Title = styled.div`
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
