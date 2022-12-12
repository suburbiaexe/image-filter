import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageTwelve() {
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
                    2D convolution with separable kernels ends up being about{" "}
                    <span className={pageStyles.bold}>2/(kernel width)</span>{" "}
                    times faster than using a 2D filter, which becomes a very
                    significant difference as your kernel grows. So, if you can,
                    try to use separable kernels!
                </p>
                <Arrows
                    prevPage="/advanced/page_11_ad"
                    nextPage="/advanced/page_13_ad"
                    pageNum={12}
                />
            </div>
        </div>
    );
}
