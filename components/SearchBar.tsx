import React from "react";
import searchBarStyles from "../styles/searchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    return (
        <div
            className={`${searchBarStyles.searchBarCont} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
        >
            <AiOutlineSearch />
            <input
                type="text"
                className={searchBarStyles.inp}
                placeholder="Search for a country"
            />
        </div>
    );
};

export default SearchBar;
