import React, { useState, useEffect, Key } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/country.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { addCommaToNumber } from "../../common/addCommaTONumbers";

const CountryDetails = () => {
    const router = useRouter();
    const countryName = router.query.name;
    const [country, setCountry] = useState<any[]>([]);

    useEffect(() => {
        if (!countryName) {
            return;
        }

        const fetchCountry = async () => {
            const res: Response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const data = await res.json();
            setCountry(data);
            console.log(data[0].languages);
        };

        fetchCountry();
    }, [countryName]);

    return (
        <main className={styles.main}>
            <div
                className={`${styles.backBtn} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
                onClick={() => router.back()}
            >
                <BiArrowBack />
                Back
            </div>

            {country.map((item, i) => (
                <div key={i} className={styles.countryDetailsCont}>
                    <div className={styles.flagCont}>
                        <Image
                            src={item.flags.svg}
                            alt={item.name.common}
                            layout="fill"
                            objectFit="cover"
                            className={styles.flag}
                        ></Image>
                    </div>
                    <div className={styles.countryDetails}>
                        <p className={styles.name}>{item.name.common}</p>
                        <div className={styles.detailsCont}>
                            <div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Native Name:</p>
                                    <p className={styles.value}>{item.name.common}</p>
                                </div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Population:</p>
                                    <p className={styles.value}>
                                        {addCommaToNumber(item.population)}
                                    </p>
                                </div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Region:</p>
                                    <p className={styles.value}>{item.region}</p>
                                </div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Sub Region:</p>
                                    <p className={styles.value}>{item.subregion}</p>
                                </div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Capital:</p>
                                    <p className={styles.value}>{item.capital}</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Top Level Domain:</p>
                                    <p className={styles.value}>{item.tld}</p>
                                </div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Currency(ies):</p>
                                    <p className={styles.value}>
                                        {item.currencies !== undefined
                                            ? item.currencies[Object.keys(item.currencies)[0]].name
                                            : ""}
                                    </p>
                                </div>
                                <div className={styles.detail}>
                                    <p className={styles.key}>Language(s):</p>
                                    <p className={styles.value}>
                                        {Object.values(item.languages).join(", ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.borderCountriesCont}>
                            <p className={styles.header}>Border Countries:</p>
                            <div className={styles.borderCountries}>
                                {item.borders &&
                                    item.borders.map((border: string, i: Key) => {
                                        return (
                                            <Link href={`/countries/${border}`} key={i}>
                                                <p
                                                    className={`${styles.country} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
                                                >
                                                    {border}
                                                </p>
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default CountryDetails;
