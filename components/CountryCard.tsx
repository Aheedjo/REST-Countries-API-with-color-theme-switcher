import React from "react";
import countryCard from "../styles/CountryCard.module.scss";
import Link from "next/link";
import { addCommaToNumber } from "../common/addCommaTONumbers";
import Image from "next/image";

const CountryCard = ({ country }: { country: any }) => {
    return (
        <div
            className={`${countryCard.cardCont} bg-dark-mode-text-&-light-mode-elements dark:bg-dark-mode-elements`}
            id="cardCont"
        >
            <Link href={`/countries/${country.name.common}`}>
                <div className={countryCard.flagCont}>
                    <Image
                        src={country.flags.svg}
                        alt={country.name.common}
                        layout="fill"
                        objectFit="cover"
                        sizes="100%"
                        className={countryCard.flag}
                    ></Image>
                </div>

                <div className={countryCard.detailsCont}>
                    <p className={countryCard.countryName} id="name">
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
                            <p className={countryCard.value} id="region">
                                {country.region}
                            </p>
                        </div>
                        <div className={countryCard.detail}>
                            <p className={countryCard.key}>Capital:</p>
                            <p className={countryCard.value}>{country.capital}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CountryCard;
