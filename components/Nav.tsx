import React, { useEffect, useState } from "react";
import NavStyles from "../styles/Nav.module.scss";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

const Nav = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div
            className={`${NavStyles.nav} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
        >
            <div className={NavStyles.container}>
                <Link href={"/"}>
                    <h1 className={NavStyles.logo}>where in the world?</h1>
                </Link>
                <button
                    className={NavStyles.themeToggle}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? (
                        <>
                            <BsMoon /> Dark mode
                        </>
                    ) : (
                        <>
                            <BsSun /> Light mode
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Nav;
