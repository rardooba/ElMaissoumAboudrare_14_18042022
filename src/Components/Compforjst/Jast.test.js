import { render, screen } from "@testing-library/react";
import Jast, { sum } from "./Jast";

describe("Test f(x) sum", () => {

    it("Should return the sum of numbers on params", () => {
        //mock
        const result = sum(3, 2)
        //test
        expect(result).toEqual(5)
    } )

    it("Should render Jast component with result", () => {
        //mock
        document.body.innerHtml = render(
            <Jast />
        )

        const result = screen.getByRole("heading", {level: 1, text: 5})

        expect(result).toBeTruthy()
    } )
})