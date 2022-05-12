import { render, fireEvent, screen } from "@testing-library/react";
//import { screen, getByText } from "@testing-library/jest-dom";
//add full expect method
import "@testing-library/jest-dom/extend-expect";

import React from "react";

import ModalLIB from "../Components/ModalResCreateEmployee/ModalLIB";
import { ContextProvider } from "../services/contextAPI";
import App from "../App";

//TODO >> Traitement de la modal si ouverte

describe("Given I want add an employee in employees database", () => {
  describe("When I click on the Submit button to add employee", () => {
    it("Should modal be rendered", () => {
      render(
        <ContextProvider>
          <App />
        </ContextProvider>
      );

      const submit = screen.getByText("Save");
      expect(submit.value).toContain("Save");

      fireEvent.click(submit);

      render(
        <ModalLIB onClose={() => null} isOpen={true}>
          <p>Modal content</p>
        </ModalLIB>
      );

      //screen.debug()

      const modal = screen.getByText("Modal content");

      expect(modal.textContent).toBeTruthy();
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
        expect(mockClose.mock.calls.length).toBe(1);
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
        const close = screen.getByTestId("overlay")

        fireEvent.click(close);
        //show call number on close BTN
        expect(mockClose.mock.calls.length).toBe(1);
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
        expect(mockClose.mock.calls.length).toBe(1);
      });
    });

    describe("When i push an other key instead escape key", () => {
      it("Should do nothing", function () {
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
