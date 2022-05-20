import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import React from "react";

import ModalLIB from "../Components/ModalResCreateEmployee/ModalLIB";
import { ContextProvider } from "../services/contextAPI";
import FormCreateEmployee from "../Components/FormCreateEmployee";

//------------------------------------------------------------//

/*-----------------------*\
           Tests
\*-----------------------*/

describe("Given I want add an employee in employees database", () => {
  describe("When I click on the Submit button to add employee", () => {

    it("Should display error message if all fields are empty", async () => {
      render(
        <ContextProvider>
          <FormCreateEmployee />
        </ContextProvider>
      );

      const form = screen.getByTestId("form");
      fireEvent.submit(form);

      expect(screen.getAllByTestId("errorMsg")).toBeTruthy();
    })

    it("Should render modal", async () => {
      render(
        <ContextProvider>
          <FormCreateEmployee />
        </ContextProvider>
      );

      //Mock User type form
      const firstname = screen.getByTestId("firstname");
      const lastname = screen.getByTestId("lastname");
      const dateOfBirth = screen.getByTestId("dateOfBirth");
      const dateStart = screen.getByTestId("dateStart");
      const street = screen.getByTestId("street");
      const city = screen.getByTestId("city");
      const state = screen.getByTestId("state");
      const zipCode = screen.getByTestId("zipCode");
      const department = screen.getByTestId("department");
      //-----
      userEvent.type(firstname, "rardooba");
      userEvent.type(lastname, "rardooba");
      fireEvent.change(dateOfBirth, { target: { value: "1984-12-18" } });
      fireEvent.change(dateStart, { target: { value: "2022-05-20" } });
      userEvent.type(street, "99 rar");
      userEvent.type(city, "city");
      userEvent.selectOptions(state, screen.getByText('Virginia'));
      userEvent.type(zipCode, "44444");
      userEvent.selectOptions(department, ["Legal"]);

      const form = screen.getByTestId("form");

      fireEvent.submit(form);
      const modal = await waitFor(() => screen.findByTestId("overlay"));
      expect(modal).toBeInTheDocument();
    });
  });

  describe("When modal is open", () => {
    it("Should have some content inside", function () {
      render(
        <ModalLIB onClose={() => null} isOpen={true}>
          <p>Modal content</p>
        </ModalLIB>
      );

      const content = screen.getByText("Modal content");
      //assertion de test
      expect(content).toBeInTheDocument();
    });
  });

  describe("Given I want to close modal pop-up", () => {
    describe("When i click on close button", () => {
      it("Should close modal", function () {
        //Mock f(x) onClose
        const mockClose = jest.fn();

        //Render component + add mocked f(x)
        render(
          <ModalLIB onClose={mockClose} isOpen={true}>
            <p>Modal content</p>
          </ModalLIB>
        );

        //get close BTN behin component
        const close = screen.getByRole("button");

        fireEvent.click(close);
        //show call number on close BTN
        expect(mockClose).toHaveBeenCalledTimes(1);
      });
    });

    describe("When i click on overlay", () => {
      it("Should close modal", function () {
        //Mock f(x) onClose
        const mockClose = jest.fn();

        //Render component + add mocked f(x)
        render(
          <ModalLIB onClose={mockClose} isOpen={true}>
            <p>Modal content</p>
          </ModalLIB>
        );

        //get close BTN behin component
        const close = screen.getByTestId("overlay");

        fireEvent.click(close);
        //show call number on close BTN
        expect(mockClose).toHaveBeenCalledTimes(1);
      });
    });

    describe("When i push the escape key on my keyboard", () => {
      it("Should close modal", function () {
        //Mock f(x) onClose
        const mockClose = jest.fn();

        //Render component + add mocked f(x)
        render(
          <ModalLIB onClose={mockClose} isOpen={true}>
            <p>Modal content</p>
          </ModalLIB>
        );

        fireEvent.keyDown(document, { key: "Escape" });
        //show call number onClose BTN
        expect(mockClose).toHaveBeenCalledTimes(1);
      });
    });

    describe("When i push an other key instead escape key", () => {
      it("Should not close modal", function () {
        //Mock f(x) onClose
        const mockClose = jest.fn();

        //Render component + add mocked f(x)
        render(
          <ModalLIB onClose={mockClose} isOpen={true}>
            <p>Modal content</p>
          </ModalLIB>
        );

        fireEvent.keyDown(document, { key: "Enter" });
        //show call number onClose BTN
        expect(mockClose.mock.calls.length).toBe(0);
      });
    });
  });
});
