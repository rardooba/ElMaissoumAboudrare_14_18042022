import React, { useContext } from "react";
import { Context } from "../../services/contextAPI";
import styled from "styled-components";
import { departments, states } from "../../API/data";
import DatePickerNPM from "../DatePicker";




const FromCreateEmployee = () => {
  const { employeeData, setEmployeeData, employeesArray, setEmployeesArray } =
    useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployeeOBJ = { ...employeeData };

      setEmployeeData({
        ...employeeData,
        isModalOpen: true,
      });
      setEmployeesArray(employeesArray.concat(newEmployeeOBJ));

  };



  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        value={employeeData.firstName}
        onChange={(e) => {
          setEmployeeData({ ...employeeData, firstName: e.target.value });
        }}
        
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        onChange={(e) =>
          setEmployeeData({ ...employeeData, lastName: e.target.value })
        }
        value={employeeData.lastName}
      />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePickerNPM name="dateOfBirth" />

      <label htmlFor="start-date">Start Date</label>
      <DatePickerNPM name="startDate" />

      <Address>
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onChange={(e) =>
            setEmployeeData({ ...employeeData, street: e.target.value })
          }
          value={employeeData.street}
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onChange={(e) =>
            setEmployeeData({ ...employeeData, city: e.target.value })
          }
          value={employeeData.city}
        />

        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          onChange={(e) =>
            setEmployeeData({ ...employeeData, state: e.target.value })
          }
          value={employeeData.state}
        >
          {states.map((elt, index) => (
            <option key={index}>{elt.name}</option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          onChange={(e) =>
            setEmployeeData({ ...employeeData, zipCode: e.target.value })
          }
          value={employeeData.zipCode}
        />
      </Address>

      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        onChange={(e) =>
          setEmployeeData({ ...employeeData, department: e.target.value })
        }
        value={employeeData.department}
      >
        {departments.map((elt, index) => (
          <option key={index}>{elt.name}</option>
        ))}
      </select>

      <br />
      <input
        type="submit"
        value="Save"
        data-toggle="modal"
        data-target="#exampleModal"
      />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

const Address = styled.fieldset`
  margin-top: 10px;
`;

export default FromCreateEmployee;
