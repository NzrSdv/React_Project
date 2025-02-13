'use client';
import styles from "./Loader.module.css";

export default function Loader(){
    return <div className={styles.LoaderWrap}>
        <div className={styles.LoaderCycle}>
            <span>Loading...</span>
        </div>
    </div>
}