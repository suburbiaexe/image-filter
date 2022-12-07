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
                <p className={pageStyles.mainLeftText}>
                    Filtering works by computing some function over <span className={pageStyles.bold}>each pixel’s</span> surrounding area, starting at the origin.
                </p>
                <Image
                    src="/images/beg_func.png"
                    width={425}
                    height={400}
                    alt="Illustration of a smaller filter over a larger image."
                />
            </div>

            <Arrows prevPage="/beginner/page_1_beg" nextPage="/beginner/page_3_beg" pageNum={2} />
        </div>
    );
}