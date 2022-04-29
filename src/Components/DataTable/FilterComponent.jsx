import React from 'react';
import styled from "styled-components"

const FilterComponent = ({onFilter, filterText, onClear}) => {
    return (
        <Header>
        <Search id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />

        <button type="button" onClick={onClear}>X</button>
        </Header>
    );
};

const Header = styled.header`
position: relative;
display: flex;
flex: 1 1 auto;
box-sizing: border-box;
-webkit-box-align: center;
align-items: center;
padding: 4px 16px 4px 24px;
width: 100%;
-webkit-box-pack: end;
justify-content: flex-end;
flex-wrap: wrap;
background-color: rgb(255, 255, 255);
min-height: 52px;

button {
    border-radius: 0px 5px 5px 0px;
    height: 34px;
    width: 32px;
    text-align: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
`
const Search = styled.input`
height: 32px;
width: 200px;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgb(229, 229, 229);
padding: 0px 32px 0px 16px;
`

export default FilterComponent;