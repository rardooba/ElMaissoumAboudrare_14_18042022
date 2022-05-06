import React, { useContext, useMemo, useState } from "react";
import styled from "styled-components";

//ContextAPI
import { Context } from "../../services/contextAPI";

//PLUGIN NPM: DataTable
import DataTable from "react-data-table-component";
import FilterComponent from "../DataTable/FilterComponent";

//Mocked Data
//Add Mocked Data Employees with > exampleData
import { columns } from "../../API/data";

//------------------------------------------------------------//

const DataTableList = () => {
  const { employeesArray } = useContext(Context);

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

/*-----------------------*\
            CSS
\*-----------------------*/

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
  .iwtdhY {
    width: 68vw;
  }

  .ea-dCXr svg {
    display: none;
  }

  .reBEO option {
    color: #000;
  }
  

  .dAFHra {
    background-color: unset;
    padding: 0;
  }
`;

export default DataTableList;
