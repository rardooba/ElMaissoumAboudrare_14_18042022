import { createContext, useState } from "react"


export const Context = createContext()



export const ContextProvider = ({children}) => {
    const [employeeData, setEmployeeData] = useState()
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