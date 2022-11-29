import React, { useState } from "react";
import filterStyles from "../styles/filter.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Filter = () => {
    const [show, setShow] = useState(false);
    const [filterText, setFilterText] = useState("Filter by region");
    const regionList = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

    const toggleMenu = () => {
        setShow(!show);
    };

    const filterCountries = (region: string) => {
        const regions = document.querySelectorAll("#region") as NodeListOf<HTMLElement> | null;
        regions!.forEach((item) => {
            if (region === "All") {
                item.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.style.display =
                    "block";
            } else if (item?.innerText === region) {
                item.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.style.display =
                    "block";
            } else {
                item.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.style.display =
                    "none";
            }
        });
        setFilterText(region);
    };

    return (
        <div
            className={`${filterStyles.filterCont} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements rounded-md`}
        >
            <div className={filterStyles.filterToggle} onClick={toggleMenu}>
                <p>{filterText}</p>
                {show ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div
                className={
                    show
                        ? `${filterStyles.filterOptions} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements `
                        : filterStyles.hideMenu
                }
            >
                {regionList.map((region, i) => {
                    return (
                        <div
                            key={i}
                            onClick={() => {
                                filterCountries(region);
                                toggleMenu();
                            }}
                            className={filterStyles.option}
                        >
                            <p>{region}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter;
