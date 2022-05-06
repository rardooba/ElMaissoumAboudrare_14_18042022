import React, { useContext, useMemo, useState } from "react";
import { Context } from "../../services/contextAPI";
import styled from "styled-components";

import DataTable from "react-data-table-component";
import { columns, exampleData } from "../../API/data";

import FilterComponent from "../DataTable/FilterComponent";

const DataTableList = () => {
  const { employeesArray } = useContext(Context);

  // useEffect(() => {

  //   let retrievedObject = window.localStorage.employees ? window.localStorage.employees.split() : []

  //     //console.log(JSON.parse(retrievedObject));

  //     //setEmployeesArray.concat(JSON.parse(retrievedObject))

  //     setEmployeesArray([JSON.parse(retrievedObject)])
  //     console.log('employeesList', employeesArray);

  // }, [])
  //! infinite rerender
  //console.log(employeesList);




  //Tables Plugin Config

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  //here change Array data
  const filteredItems = employeesArray.filter((item) => {
    return (
      (item.firstName &&
        item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName &&
        item.lastName.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const paginationComponentOptions = {
    rowsPerPageText: "rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "30px", // override the cell padding for head cells
        paddingRight: "30px",
        color: "#fff",
        backgroundColor: "#1d2b36",
      },
    },
    cells: {
      style: {
        paddingLeft: "30px", // override the cell padding for data cells
        paddingRight: "30px",
      },
    },
  };

  return (
    <Tables>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        customStyles={customStyles}
      />
    </Tables>
  );
};

const Tables = styled.main`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  .cAKknD {
    overflow-x: unset;
    overflow-y: unset;
  }
  input:not([type="checkbox"]):not([type="radio"]),
  select,
  textarea {
    width: 35%;
    border-color: #1ab3e6;
    margin-bottom: 0;
  }
  .eQzNb {
    width: 68vw;
  }

  .pgLGf svg {
    display: none;
  }

  .ixJwiC option {
    color: #000;
  }

  .fWqEaA button {
    height: auto;
    margin: 0;
  }

  .fWqEaA {
    background: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px 0;
  }

  .lfJGeo {
    background-color: unset;
    padding: 0;
  }
  .fMjwoj {

    width: 85px;
  }
`;

export default DataTableList;
