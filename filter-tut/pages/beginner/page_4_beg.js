import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageFour() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.centerContainer}>
                <p className={pageStyles.centerTextSmaller}>
                    So...how do we actually &quot;compute a function over each
                    pixel&apos;s surrounding area&quot;?
                </p>
                <p className={pageStyles.centerText}>
                    We use{" "}
                    <span className={pageStyles.pinkAccentText}>
                        convolution
                    </span>
                    . Here&apos;s how it works.
                </p>
            </div>

            <div className={pageStyles.mainContainer}>
                <Arrows
                    prevPage="/beginner/page_3_beg"
                    nextPage="/beginner/page_5_beg"
                    pageNum={4}
                />
            </div>
        </div>
    );
}
