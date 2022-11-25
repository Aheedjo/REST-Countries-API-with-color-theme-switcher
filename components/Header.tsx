import styles from "../styles/header.module.scss";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

const Header = () => {
    return (
        <div className={styles.controls}>
            <SearchBar />
            <Filter />
        </div>
    );
};

export default Header;
