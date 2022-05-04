
//! No used
import React, { useContext, useState } from "react";
import DatePicker from "react-date-picker";
import { Context } from "../../services/contextAPI";

const DatePickerNPM = ({ name, register }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { employeeData, setEmployeeData } = useContext(Context);

  const formatDate = (elt) => {
    const day =
      elt.getDate().toString().length < 2 ? "0" + elt.getDate() : elt.getDate();
      const mounth =
      elt.getMonth().toString().length < 2
      ? `0${elt.getMonth() + 1}`
      : elt.getMonth() + 1;
      const year = elt.getFullYear();
      const date = `${day}/${mounth}/${year}`;
    return date;
  };


  const handleInputDate = (e) => {
    setStartDate(e)

    switch (name) {
        case 'dateOfBirth':
            setEmployeeData({
                ...employeeData,
                dateOfBirth: formatDate(startDate)
            })
            break;
        case 'startDate':
            setEmployeeData({
                ...employeeData,
                startDate: formatDate(startDate)
            })
            break;
    
        default:
            throw new Error()
    } 
}

  return <DatePicker onChange={handleInputDate} value={startDate} required={true} clearIcon="" />
};

export default DatePickerNPM;
