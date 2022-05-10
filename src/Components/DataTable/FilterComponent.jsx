import React from "react";
import styled from "styled-components";

//PropTypes
import propTypes from "prop-types";

//------------------------------------------------------------//

const FilterComponent = ({ onFilter, filterText, onClear }) => {
  return (
    <Filter>
      <Search
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />

      <button type="button" onClick={onClear}>
        &#x2715;
      </button>
    </Filter>
  );
};

FilterComponent.propTypes = {
  onFilter: propTypes.func,
  filterText: propTypes.string,
  onClear: propTypes.func,
};

/*-----------------------*\
            CSS
\*-----------------------*/

const Filter = styled.div`
  position: relative;
  padding: 0 0 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: unset;
  min-height: 52px;
  border-color: #7cb342;

  button {
    border-radius: 0px 5px 5px 0px;
    height: auto;
    width: 32px;
    margin: 0;
    text-align: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

const Search = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid rgb(229, 229, 229);
  padding: 0px 32px 0px 16px;
`;

export default FilterComponent;
