import React, { useState } from "react";
import filterStyles from "../styles/filter.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Filter = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <div
            className={`${filterStyles.filterCont} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
        >
            <div className={filterStyles.filterToggle} onClick={toggleMenu}>
                <p>Filter by country</p>
                {show ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div
                className={
                    show
                        ? `${filterStyles.filterOptions} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`
                        : filterStyles.hideMenu
                }
            >
                <div className={filterStyles.option}>
                    <p>Africa</p>
                </div>
                <div className={filterStyles.option}>
                    <p>America</p>
                </div>
                <div className={filterStyles.option}>
                    <p>Asia</p>
                </div>
                <div className={filterStyles.option}>
                    <p>Europe</p>
                </div>
                <div className={filterStyles.option}>
                    <p>Ocenia</p>
                </div>
            </div>
        </div>
    );
};

export default Filter;
