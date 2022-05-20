import React, { useContext, useState } from "react";
import styled from "styled-components";

//ContextAPI
import { Context } from "../../services/contextAPI";

//Data Config > departments, states
import { departments, states } from "../../API/data";

//PLUGIN NPM: React Hook Form
import { useForm } from "react-hook-form";

//Components
import ModalLIB from "../ModalResCreateEmployee/ModalLIB";

//------------------------------------------------------------//

const FormCreateEmployee = () => {
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

    setEmployeeData({
      firstName: data.firstname,
      lastName: data.lastname,
    })

    setIsModalOpen(true);

    setEmployeesArray((prevState) => {
      window.localStorage.setItem(
        "employees",
        JSON.stringify([...prevState, employee])
      );
      return [...prevState, employee];
    });
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <>
      <ModalLIB
        onClose={() => setIsModalOpen(!isModalOpen)}
        isOpen={isModalOpen}
      >
        <div>{employeeData.lastName} {employeeData.firstName} is added !</div>
      </ModalLIB>
      <Form onSubmit={handleSubmit(onSubmit)} data-testid="form">
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
          data-testid="firstname"
          aria-invalid={errors.firstname?.message ? "true" : null}
        />
        <small data-testid="errorMsg">{errors.firstname?.message}</small>

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
          name="lastname"
          data-testid="lastname"
          aria-invalid={errors.lastname?.message ? "true" : null}
        />
        <small data-testid="errorMsg">{errors.lastname?.message}</small>

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "This is required.",
          })}
          data-testid="dateOfBirth"
          aria-invalid={errors.dateOfBirth?.message ? "true" : null}
        />
        <small data-testid="errorMsg">{errors.dateOfBirth?.message}</small>

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          {...register("startDate", {
            required: "This is required.",
          })}
          data-testid="dateStart"
          aria-invalid={errors.startDate?.message ? "true" : null}
        />
        <small data-testid="errorMsg">{errors.startDate?.message}</small>

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
            data-testid="street"
            aria-invalid={errors.street?.message ? "true" : null}
          />
          <small data-testid="errorMsg">{errors.street?.message}</small>

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
            data-testid="city"
            aria-invalid={errors.city?.message ? "true" : null}
          />
          <small data-testid="errorMsg">{errors.city?.message}</small>

          <label htmlFor="state">State</label>
          <select
            id="state"
            {...register("state", {
              required: "This is required.",
            })}
            name="state"
            data-testid="state"
            aria-invalid={errors.state?.message ? "true" : null}
          >
            <option value="">--Choose an option--</option>
            {states.map((elt, index) => (
              <option key={index}>{elt.name}</option>
            ))}
          </select>
          <small data-testid="errorMsg">{errors.state?.message}</small>

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
            data-testid="zipCode"
            aria-invalid={errors.zipcode?.message ? "true" : null}
          />
          <small data-testid="errorMsg">{errors.zipcode?.message}</small>
        </Address>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          {...register("department", {
            required: "This is required.",
          })}
          data-testid="department"
          aria-invalid={errors.department?.message ? "true" : null}
        >
          <option value="">--Choose an option--</option>
          {departments.map((elt, index) => (
            <option key={index}>{elt.name}</option>
          ))}
        </select>

        <small data-testid="errorMsg">{errors.department?.message}</small>

        <br />
        <input type="submit" data-testid="save" value="Save" />
      </Form>
    </>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

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

export default FormCreateEmployee;
