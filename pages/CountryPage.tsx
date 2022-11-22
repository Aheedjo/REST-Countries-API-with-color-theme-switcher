import React from "react";
import Link from "next/link";
import styles from "../styles/countryPage.module.scss";
import { BsArrowLeft } from "react-icons/bs";

const CountryPage = () => {
    return (
        <main className={styles.main}>
            <Link href="/">
                <button className={styles.backBtn}>
                    <BsArrowLeft />
                    Back
                </button>
            </Link>
            <div className={styles.countryDetailsCont}>
                <div className={styles.flag}></div>
                <div className={styles.countryDetails}>
                    <h1 className={styles.name}>Belgium</h1>
                    <div className={styles.detailsCont}>
                        <div className="left">
                            <div className={styles.detail}>
                                <p className={styles.key}>native name:</p>
                                <div className={styles.value}>Belgie</div>
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.key}>population:</p>
                                <div className={styles.value}>11, 319, 511</div>
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.key}>region:</p>
                                <div className={styles.value}>Europe</div>
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.key}>sub region:</p>
                                <div className={styles.value}>
                                    Western Europe
                                </div>
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.key}>capital:</p>
                                <div className={styles.value}>Brussels</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className={styles.detail}>
                                <p className={styles.key}>top level domain:</p>
                                <div className={styles.value}>.be</div>
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.key}>Currencies:</p>
                                <div className={styles.value}>Euro</div>
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.key}>Languages:</p>
                                <div className={styles.value}>
                                    Dutch, French, German
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.borderCountriesCont}>
                        <p className={styles.header}>Border Countries:</p>
                        <div className={styles.borderCountries}>
                            <div className={styles.country}>France</div>
                            <div className={styles.country}>France</div>
                            <div className={styles.country}>Germany</div>
                            <div className={styles.country}>Netherlands</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CountryPage;
