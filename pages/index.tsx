import styles from "../styles/Home.module.scss";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Key } from "react";

interface indexPageProps {
    countries: {
        nativeName: string;
        population: number;
        region: string;
        subregion: string;
        capital: string;
        tld: string;
        currencies: string[];
        languages: string[];
        borders: string;
        flags: { svg: string };
    }[];
}

export const getStaticProps: GetStaticProps = async () => {
    const res: Response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    return {
        props: { countries: countries.slice(0, 20) },
    };
};

export default function Home({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main className={styles.main}>
            <div className={styles.controls}>
                <SearchBar />
                <Filter />
            </div>
            <div className={styles.countriesGrid}>
                {countries.map((item: any, i: Key) => (
                    <CountryCard country={item} key={i} />
                ))}
            </div>
        </main>
    );
}
