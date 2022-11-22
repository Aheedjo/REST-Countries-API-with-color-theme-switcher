import React from "react";
import countryCard from "../styles/CountryCard.module.scss";
import Link from "next/link";
import { addCommaToNumber } from "../common/addCommaTONumbers";
import Image from "next/image";

const CountryCard = ({ country }: { country: any }) => {
    return (
        <div
            className={`${countryCard.cardCont} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
        >
            <Link href="/CountryPage">
                <Image
                    src={country.flags.svg}
                    alt={country.name}
                    height={175}
                    width={300}
                    className={countryCard.flag}
                ></Image>
                <div className={countryCard.detailsCont}>
                    <p className={countryCard.countryName}>
                        {country.name.common}
                    </p>
                    <div className={countryCard.details}>
                        <div className={countryCard.detail}>
                            <p className={countryCard.key}>Population:</p>
                            <p className={countryCard.value}>
                                {addCommaToNumber(country.population)}
                            </p>
                        </div>
                        <div className={countryCard.detail}>
                            <p className={countryCard.key}>Region:</p>
                            <p className={countryCard.value}>
                                {country.region}
                            </p>
                        </div>
                        <div className={countryCard.detail}>
                            <p className={countryCard.key}>Capital:</p>
                            <p className={countryCard.value}>
                                {country.capital}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CountryCard;
