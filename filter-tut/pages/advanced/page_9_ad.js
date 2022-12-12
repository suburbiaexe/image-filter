import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageNine() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.centerContainer}>
                <p
                    className={pageStyles.centerTextSmaller}
                    style={{ width: "90%" }}
                >
                    As you might already know or be able to sense, convolution
                    can become really slow as images or kernels get larger.
                </p>
                <p className={pageStyles.centerText}>
                    So how can we make it{" "}
                    <span className={pageStyles.pinkAccentText}>faster</span>?
                </p>
            </div>

            <div className={pageStyles.mainContainer}>
                <Arrows
                    prevPage="/advanced/page_8_ad"
                    nextPage="/advanced/page_10_ad"
                    pageNum={9}
                />
            </div>
        </div>
    );
}
