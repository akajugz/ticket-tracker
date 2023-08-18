import React, { useState } from "react";

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
      <div>
        <input
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
