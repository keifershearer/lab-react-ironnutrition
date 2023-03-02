import { Divider, Input } from 'antd';
//import { useState } from 'react';

// Iteration 5
function Search(props) {
    const { searchData, setSearchData } = props

    const handleSelect = e => {
        setSearchData(e.target.value)


    }
    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={searchData} type="text" onChange={handleSelect} />
        </>
    );
}

export default Search;