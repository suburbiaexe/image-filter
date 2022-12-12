import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageEight() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.mainHorzContainer}>
                    <Image
                        src="/images/rgb_sum.png"
                        width={1050}
                        height={325}
                        alt="Calculation of a weighted sum using a 3 by 3 filter with all values as 1/9 overlaid on the first pixel of an image where each cell has RGB values."
                        style={{ padding: "1em" }}
                    />
                </div>
                <p
                    className={pageStyles.mainTextSmaller}
                    style={{ fontSize: "50px" }}
                >
                    Then, we center the filter over the origin pixel and
                    calculate the{" "}
                    <span className={pageStyles.pinkAccentText}>
                        new, filtered RGB value of the origin
                    </span>{" "}
                    by computing a weighted sum of each surrounding pixel's RGB
                    values, using the filter values as weights.
                </p>
                <Arrows
                    prevPage="/intermediate/page_7_int"
                    nextPage="/intermediate/page_9_int"
                    pageNum={8}
                />
            </div>
        </div>
    );
}
