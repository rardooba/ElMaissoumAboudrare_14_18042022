import React, { useContext, useEffect } from "react";
import { Context } from "../../services/contextAPI";
import styled from "styled-components";
import { departments, states } from "../../API/data";
//import DatePickerNPM from "../DatePicker";
import DatePicker from "react-date-picker";
import { INITIAL_STATE } from "../../services/contextAPI";

import { Controller, useForm } from "react-hook-form";

const FromCreateEmployee = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { employeeData, setEmployeeData, employeesArray, setEmployeesArray } =
    useContext(Context);


  const formatDate = (elt) => {
    const day =
      elt.getDate().toString().length < 2 ? "0" + elt.getDate() : elt.getDate();
    const mounth =
      elt.getMonth().toString().length < 2
        ? `0${elt.getMonth() + 1}`
        : elt.getMonth() + 1;
    const year = elt.getFullYear();
    const date = `${day}/${mounth}/${year}`;
    return date;
  };

  const onSubmit = (data) => {
    setEmployeeData({
      firstName: data.firstname,
      lastName: data.lastname,
      dateOfBirth: formatDate(data.dateOfBirth),
      startDate: formatDate(data.startDate),
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipcode,
      department: data.department,
      isModalOpen: true,
    });
  };

  useEffect(() => {
    if (employeeData !== INITIAL_STATE) {
      setEmployeesArray([...employeesArray, employeeData]);
    }
  }, [employeeData]);

  console.log(employeesArray);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        {...register("firstname", {
          required: "This is required.",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
          pattern: {
            value: /^[A-zÀ-ú]+$/i,
            message: "No number in your name please",
          },
        })}
      />
      <p>{errors.firstname?.message}</p>

      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        {...register("lastname", {
          required: "This is required.",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
          pattern: {
            value: /^[A-zÀ-ú]+$/i,
            message: "No number in your name please",
          },
        })}
      />
      <p>{errors.lastname?.message}</p>

      <label htmlFor="dateOfBirth">Date of Birth</label>

      <Controller
        name="dateOfBirth"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            onChange={onChange}
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
            value={value}
            required={true}
            format="dd/MM/y"
            clearIcon=""
          />
        )}
      />

      <label htmlFor="start-date">Start Date</label>
      <Controller
        name="startDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            onChange={onChange}
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
            value={value}
            required={true}
            format="dd/MM/y"
            clearIcon=""
          />
        )}
      />

      <Address>
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          {...register("street", {
            required: "This is required.",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
          })}
        />
        <p>{errors.street?.message}</p>

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          {...register("city", {
            required: "This is required.",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
            pattern: {
              value: /^[A-zÀ-ú]+$/i,
              message: "No number in your city name",
            },
          })}
        />
        <p>{errors.city?.message}</p>

        <label htmlFor="state">State</label>
        <select
          id="state"
          {...register("state", {
            required: "This is required.",
          })}
        >
          <option value="">--Please choose an option--</option>
          {states.map((elt, index) => (
            <option key={index}>{elt.name}</option>
          ))}
        </select>
        <p>{errors.state?.message}</p>

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          {...register("zipcode", {
            required: "This is required.",
            maxLength: {
              value: 5,
              message: "Max length is 5",
            },
          })}
        />
        <p>{errors.zipcode?.message}</p>
      </Address>

      <label htmlFor="department">Department</label>
      <select
        id="department"
        {...register("department", {
          required: "This is required.",
        })}
      >
        <option value="">--Please choose an option--</option>
        {departments.map((elt, index) => (
          <option key={index}>{elt.name}</option>
        ))}
      </select>

      <p>{errors.department?.message}</p>

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
