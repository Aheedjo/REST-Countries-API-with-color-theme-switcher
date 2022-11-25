import React from "react";
import styles from "../styles/loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={`${styles.loadingBar} bg-gray-300 dark:bg-gray-600`}>
                <div className={`${styles.bar}  bg-gray-600 dark:bg-gray-400`}></div>
            </div>
        </div>
    );
};

export default Loading;
