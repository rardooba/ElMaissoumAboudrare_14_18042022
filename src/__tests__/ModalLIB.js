import { render, fireEvent } from "@testing-library/react";
//import { screen, getByText } from "@testing-library/jest-dom";
//add full expect method
import "@testing-library/jest-dom/extend-expect";

import React from "react";

import ModalLIB from "../Components/ModalResCreateEmployee/ModalLIB";

//TODO >> Traitement de la modal si ouverte

describe("Given I want add an employee in employees database", () => {

  // describe("When I click on the Submit button to add employee", () => {
  //   it("Then, modal component should be rendered", () => {
  //     const { modal } = render(
  //       <ModalLIB onClose={() => null} isOpen={true}>
  //         <p>Modal content</p>
  //       </ModalLIB>
  //     );

  //     const submit = document.body.querySelector("input[type='submit']");

  //     fireEvent.click(submit);

  //     expect(modal).toBeTruthy();
  //   });
  // });

  describe("When modal is open", () => {
    it("Then, it should have some content inside", function () {
      const { getByText } = render(
        <ModalLIB onClose={() => null} isOpen={true}>
          <p>Modal content</p>
        </ModalLIB>
      );

      const content = getByText("Modal content");
      //assertion de test
      expect(content).toBeInTheDocument();
    });
  });

  describe("Given I want to close modal pop-up", () => {
    describe("When i click on close button", () => {
      it("Then, it should close modal", function () {
        //Mock f(x) onClose
        const mockClose = jest.fn();

        //Render component + add mocked f(x)
        render(
          <ModalLIB onClose={mockClose} isOpen={true}>
            <p>Modal content</p>
          </ModalLIB>
        );

        //get close BTN behin component
        const close = document.body.querySelector("[aria-label='close']");

        fireEvent.click(close);
        //show call number on close BTN
        expect(mockClose.mock.calls.length).toBe(1);
      });
    });

    describe("When i push the escape key on my keyboard", () => {
      it("Then, it should close modal", function () {
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
        expect(mockClose.mock.calls.length).toBe(1);
      });
    });

    describe("When i push an other key instead escape key", () => {
      it("Then, it should do nothing", function () {
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
