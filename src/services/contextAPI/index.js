import { createContext, useState } from "react"


export const Context = createContext()

const INITIAL_STATE_EMPLOYEE_NAME = {
    firstName: "",
    lastName: ""
}


export const ContextProvider = ({children}) => {
    const [employeeData, setEmployeeData] = useState(INITIAL_STATE_EMPLOYEE_NAME)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [employeesArray, setEmployeesArray] = useState([])

    return (
        <Context.Provider value={{
            employeeData,
            setEmployeeData,
            isModalOpen,
            setIsModalOpen,
            employeesArray,
            setEmployeesArray
        }}>
            {children}
        </Context.Provider>
    )
}