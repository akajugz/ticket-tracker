import React, { useState } from "react";
import "./SearchBox.scss"

type SearchBoxProps = {
  onSearch: (searchName: string) => void;
};

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <>
      <div className="searchbox">
        <h2 className="searchbox__heading">Search employee by name:</h2>
        <input
          className="searchbox__text-field"
          type="text"
          placeholder="Search by name here"
          value={searchName}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
