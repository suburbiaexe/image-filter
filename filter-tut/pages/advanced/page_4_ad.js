import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageFour() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.centerContainer}>
                <p
                    className={pageStyles.mainText}
                    style={{
                        width: "90%",
                        paddingTop: "1em",
                    }}
                >
                    Each value in RGB describes how much{" "}
                    <span style={{ color: "var(--r)" }}>red</span>,{" "}
                    <span style={{ color: "var(--g)" }}>green</span>, and{" "}
                    <span style={{ color: "var(--b)" }}>blue</span> frequencies
                    of light a pixel emits. The A, or alpha value, defines how
                    much of the RGB color to apply. We typically represent each
                    color value in the range [0, 255], but we can also use
                    floats in range [0, 1].
                </p>
                <Arrows
                    prevPage="/advanced/page_3_ad"
                    nextPage="/advanced/page_5_ad"
                    pageNum={4}
                />
            </div>
        </div>
    );
}
