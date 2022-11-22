import "../styles/global.scss";
import Nav from "../components/Nav";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Nav />
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}
