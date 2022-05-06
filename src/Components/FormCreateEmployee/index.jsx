import React, { useContext, useEffect } from "react";
import { Context } from "../../services/contextAPI";
import styled from "styled-components";
import { departments, states } from "../../API/data";

import { useForm } from "react-hook-form";

//import Modal from "../ModalResCreateEmployee";

import ModalLIB from "../ModalResCreateEmployee/ModalLIB";

const FromCreateEmployee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  const {
    employeeData,
    setEmployeeData,
    isModalOpen,
    setIsModalOpen,
    employeesArray,
    setEmployeesArray,
  } = useContext(Context);

  const formatDate = (chaine) => {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  // const addStorage = () => {
  //   const employeesStorage = window.localStorage.getItem('employees') !== null ? setEmployeesArray([...employeesArray, JSON.parse(window.localStorage.getItem('employees'))]) : employeesArray

  //   window.localStorage.setItem('employees', JSON.stringify(employeesStorage));
  // };

  const onSubmit = (data) => {
    const employee = {
      firstName: data.firstname,
      lastName: data.lastname,
      dateOfBirth: formatDate(data.dateOfBirth),
      startDate: formatDate(data.startDate),
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipcode,
      department: data.department,
    };

    console.log(employee);

    setIsModalOpen(true);
    setEmployeesArray((prevState) => {
      window.localStorage.setItem('employees',  JSON.stringify([...prevState, employee]))
      return [...prevState, employee]
    });

    // addStorage();
  };
  //! Q: setEmployeesArray([...employeesArray, employeesData]) > undefined employeesArray

  

  
  console.log(employeesArray);

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);


  //!
  useEffect(() => {

    

  }, [])

  return (
    <>
      {/* <Modal
        content="Employee created !"
        closeModal={() => setIsModalOpen(!isModalOpen)}
        modalIsOpen={isModalOpen}
      /> */}
      <ModalLIB onClose={() => setIsModalOpen(!isModalOpen)} isOpen={isModalOpen}>
        <div>Employee created !</div>
      </ModalLIB>
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
          aria-invalid={errors.firstname?.message ? "true" : null}
        />
        <small>{errors.firstname?.message}</small>

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
          aria-invalid={errors.lastname?.message ? "true" : null}
        />
        <small>{errors.lastname?.message}</small>

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "This is required.",
          })}
          aria-invalid={errors.dateOfBirth?.message ? "true" : null}
        />
        <small>{errors.dateOfBirth?.message}</small>

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          {...register("startDate", {
            required: "This is required.",
          })}
          aria-invalid={errors.startDate?.message ? "true" : null}
        />
        <small>{errors.startDate?.message}</small>

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
            aria-invalid={errors.street?.message ? "true" : null}
          />
          <small>{errors.street?.message}</small>

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
            aria-invalid={errors.city?.message ? "true" : null}
          />
          <small>{errors.city?.message}</small>

          <label htmlFor="state">State</label>
          <select
            id="state"
            {...register("state", {
              required: "This is required.",
            })}
            aria-invalid={errors.state?.message ? "true" : null}
          >
            <option value="">--Choose an option--</option>
            {states.map((elt, index) => (
              <option key={index}>{elt.name}</option>
            ))}
          </select>
          <small>{errors.state?.message}</small>

          <label htmlFor="zipcode">Zip Code</label>
          <input
            id="zipcode"
            type="text"
            {...register("zipcode", {
              required: "This is required.",
              maxLength: {
                value: 5,
                message: "Max length is 5",
              },
              pattern: {
                value: /[0-9]/i,
                message: "No letter in Zip code please",
              },
            })}
            aria-invalid={errors.zipcode?.message ? "true" : null}
          />
          <small>{errors.zipcode?.message}</small>
        </Address>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          {...register("department", {
            required: "This is required.",
          })}
          aria-invalid={errors.department?.message ? "true" : null}
        >
          <option value="">--Choose an option--</option>
          {departments.map((elt, index) => (
            <option key={index}>{elt.name}</option>
          ))}
        </select>

        <small>{errors.department?.message}</small>

        <br />
        <input
          type="submit"
          value="Save"
        />
      </Form>
    </>
  );
};

//data-toggle="modal"
//data-target="#exampleModal"

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  small {
    color: #c62828;
  }
`;

const Address = styled.fieldset`
  margin-top: 10px;
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  legend {
    font-weight: 700;
  }
`;

export default FromCreateEmployee;
