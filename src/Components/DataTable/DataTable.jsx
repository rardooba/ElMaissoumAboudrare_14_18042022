import React, { useContext, useMemo, useState } from "react";
import { Context } from "../../services/contextAPI";
import styled from "styled-components"

import DataTable from "react-data-table-component";
import { columns, exampleData } from "../../API/data";

import FilterComponent from "../DataTable/FilterComponent";

const DataTableList = () => {
  const { employeesArray } = useContext(Context);

  const value = employeesArray;
  value.map((employee) => delete employee.isModalOpen);

  

  //Tables Plugin Config

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = employeesArray.filter(
		item => {
      return (
        (item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())) || (item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase())))
    }
	);

  console.log(exampleData);

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
      />
    </Tables>
  );
};

const Tables = styled.main`
width: 50vw;
margin: 0 auto;
.cAKknD {
  overflow-x: hidden;
}
input:not([type=checkbox]):not([type=radio]), select, textarea {
  width: 35%;
  border-color: #1ab3e6;
}

.fWqEaA button {
  
  height: auto;
  
}

.fWqEaA {
  background: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.lfJGeo {
  background-color: unset;
  padding: 0;
}
`

export default DataTableList;
