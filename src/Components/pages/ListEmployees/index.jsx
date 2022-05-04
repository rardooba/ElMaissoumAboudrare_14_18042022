import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DataTableList from "../../DataTable/DataTable";

const ListEmployees = () => {
  
  return (
    <Container id="employee">
      <h1>List Employees</h1>
      <Link to="/">
        <button className="goHome">Go Home</button>
      </Link>
      <DataTableList />
    </Container>
  );
};

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
