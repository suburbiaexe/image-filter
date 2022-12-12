import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageThree() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainText} style={{ width: "90%" }}>
                    Each value in RGB describes how much{" "}
                    <span style={{ color: "#F75D4F" }}>red</span>,{" "}
                    <span style={{ color: "#87966F" }}>green</span>, and{" "}
                    <span style={{ color: "#003DAC" }}>blue</span> frequencies
                    of light a pixel emits. The A, or alpha value, defines how
                    much of the RGB color to apply. Each{" "}
                    <span style={{ color: "#F75D4F" }}>R</span>,{" "}
                    <span style={{ color: "#87966F" }}>G</span>,{" "}
                    <span style={{ color: "#003DAC" }}>B</span> is usually
                    represented by values in the range [0, 255], where 0 means
                    “none of this color” and 255 means “all of this color.”
                </p>
                <Arrows
                    prevPage="/intermediate/page_2_int"
                    nextPage="/intermediate/page_4_int"
                    pageNum={3}
                />
            </div>
        </div>
    );
}
