import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DataTableList from "../../DataTable/DataTable";

const ListEmployees = () => {
  return (
    <Container id="employee">
      <h1>List Employees</h1>
      <DataTableList />
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export default ListEmployees;
