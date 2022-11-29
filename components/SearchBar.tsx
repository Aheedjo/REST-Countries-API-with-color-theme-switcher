import { useEffect } from "react";
import searchBarStyles from "../styles/searchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    useEffect(() => {
        const searchBar = document.getElementById("inp");

        searchBar!.addEventListener("input", (e) => {
            const { value } = e.target as HTMLInputElement;
            const names = document.querySelectorAll("#name") as NodeListOf<HTMLElement> | null;

            names != null &&
                names.forEach((name) => {
                    if (name?.innerText.toLowerCase().includes(value.toLowerCase())) {
                        name.parentElement!.parentElement!.parentElement!.style.display = "block";
                    } else {
                        name.parentElement!.parentElement!.parentElement!.style.display = "none";
                    }
                });
        });
    }, []);

    return (
        <div
            className={`${searchBarStyles.searchBarCont} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
            id="inp"
        >
            <AiOutlineSearch />
            <input type="text" className={searchBarStyles.inp} placeholder="Search for a country" />
        </div>
    );
};

export default SearchBar;
