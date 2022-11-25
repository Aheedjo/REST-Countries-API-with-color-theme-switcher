import React from "react";
import styles from "../../styles/Home.module.scss";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import CountryCard from "../../components/CountryCard";
import { Key } from "react";

const Countres = ({ countries }) => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.countriesGrid}>
                    {countries.map((item: any, i: Key) => (
                        <CountryCard country={item} key={i} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Countres;
