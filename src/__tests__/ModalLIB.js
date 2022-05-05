
import { render, fireEvent, screen } from "@testing-library/react";
import ModalLIB from "../Components/ModalResCreateEmployee/ModalLIB";

//TODO >> Traitement de la modal si ouverte

describe("Given I want add an employee in employees database", () => {
  describe("When I click on the Submit button to add employee", () => {
    test("then, it should open a modal", () => {
      //1. recup du btn Submit
      //2. écoute de l'event onClick
      //3. vérif que la modal est appelée
      //expect(handleClickSubmitBtn).toHaveBeenCalled();
      //4. vérif que la modal est executée
      // const modal = document.getElementById("modal");
      //expect(modal).toBeTruthy();
    });
  });

  describe("When modal is open", () => {
    test("Then, modal component should be rendered", () => {
      //1. On ouvre la modal
        //2. On vérifie via le txt si la mpdal est bien affichée
        //expect(screen.getAllByText("Employee created !")).toBeTruthy();
  
      // // Arrange
      // const handleClose = jest.fn();
    
      // // Act
      // const { getByText } = render(
      //   <ModalLIB onClose={handleClose}>
      //     <div>test</div>
      //   </ModalLIB>
      // );
      // // Assert
      // expect(getByText("test")).toBeTruthy();
    
      // // Act
      // fireEvent.click(getByText(/&#x2715;/i));
    
      // // Assert
      // expect(handleClose).toHaveBeenCalledTimes(1);
    });
    
  
  })
});




