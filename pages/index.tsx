import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import CountryCard from "../components/CountryCard";
import { Key } from "react";

export const getStaticProps: GetStaticProps = async () => {
    const res: Response = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    return {
        props: { data: data },
    };
};

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCountries = () => {
        setLoading(true);
        try {
            setCountries(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    if (loading) {
        return <Loading />;
    } else {
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
    }
}
