import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageTen() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <Image
                    src="/images/separable_kernel.png"
                    width={675}
                    height={275}
                    alt="3 by 3 blur filter being separated into a 1 by 3 filter and a 3 by 1 filter."
                    style={{ paddingTop: "1em" }}
                />
                <p className={pageStyles.mainText}>
                    A lot of popular filters are actually{" "}
                    <span className={pageStyles.pinkAccentText}>
                        separable kernels
                    </span>
                    , which means they can be separated into two, 1-dimensional
                    kernels: one vertical, one horizontal.
                </p>
                <Arrows
                    prevPage="/advanced/page_9_ad"
                    nextPage="/advanced/page_11_ad"
                    pageNum={10}
                />
            </div>
        </div>
    );
}
