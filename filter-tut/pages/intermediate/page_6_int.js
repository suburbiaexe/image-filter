import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageSix() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.centerContainer}>
                <p
                    className={pageStyles.centerText}
                    style={{ maxWidth: "18em" }}
                >
                    This is a process known as{" "}
                    <span className={pageStyles.pinkAccentText}>
                        convolution
                    </span>
                    . Here&apos;s how it works.
                </p>
            </div>

            <div className={pageStyles.mainContainer}>
                <Arrows
                    prevPage="/intermediate/page_5_int"
                    nextPage="/intermediate/page_7_int"
                    pageNum={6}
                />
            </div>
        </div>
    );
}
