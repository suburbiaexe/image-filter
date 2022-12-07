import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Beginner.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageTwo() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.mainHorzContainer}>
                <p className={pageStyles.mainSideText}>
                    Filtering works by computing some function over <span className={pageStyles.bold}>each pixel’s</span> surrounding area, starting at the origin.
                </p>
                <Image
                    src="/images/beg_func.png"
                    width={425}
                    height={400}
                    alt="Image"
                />
            </div>

            <Arrows prevPage="/beginner/page_1_beg" nextPage="/" pageNum={2} />
        </div>
    );
}