import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context, INITIAL_STATE } from "../../../services/contextAPI";
import FromCreateEmployee from "../../FormCreateEmployee";
import Modal from "../../ModalResCreateEmployee";

const CreateEmployee = () => {

  const {employeeData, setEmployeeData} = useContext(Context)

  return (
    <>
        <Modal content="Employee created !" closeModal={() => setEmployeeData(INITIAL_STATE)} modalIsOpen={employeeData.isModalOpen}/>
      <Title>
        <h1>HRNet</h1>
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
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
  }
`;

export default CreateEmployee;
