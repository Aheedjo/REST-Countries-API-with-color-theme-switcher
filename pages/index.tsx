import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Countries from "./countries/Countries";
import Loading from "../components/Loading";

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
        return <Countries countries={countries} />;
    }
}
