import { createContext, useState } from "react"


export const Context = createContext()

export const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
    isModalOpen: false,
}

export const ContextProvider = ({children}) => {
    const [employeeData, setEmployeeData] = useState(INITIAL_STATE)
    const [employeesArray, setEmployeesArray] = useState([])

    return (
        <Context.Provider value={{
            employeeData,
            setEmployeeData,
            employeesArray,
            setEmployeesArray
        }}>
            {children}
        </Context.Provider>
    )
}