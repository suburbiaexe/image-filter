import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageSeven() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.mainHorzContainer}>
                    <Image
                        src="/images/conv.png"
                        width={1050}
                        height={320}
                        alt="Calculation of a weighted sum using a 3 by 3 filter with all values as 1/9 overlaid on the first pixel of an image where each cell has RGB values."
                        style={{ padding: "1em" }}
                    />
                </div>
                <p
                    className={pageStyles.mainTextSmaller}
                    style={{ fontSize: "50px" }}
                >
                    As a reminder, convolution works by centering the kernel
                    over an image pixel and replacing that pixel’s value with a{" "}
                    <span className={pageStyles.pinkAccentText}>
                        weighted sum of itself and surrounding pixels
                    </span>
                    , using the filter values as weights, and repeating this
                    process for every pixel in the image.
                </p>
                <Arrows
                    prevPage="/advanced/page_6_ad"
                    nextPage="/advanced/page_8_ad"
                    pageNum={7}
                />
            </div>
        </div>
    );
}
