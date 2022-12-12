import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageFive() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.mainHorzContainer}>
                    <Image
                        src="/images/moving_filter.png"
                        width={650}
                        height={300}
                        alt="Image of filter overlaying an image at two different locations."
                        style={{ padding: "1em" }}
                    />
                </div>
                <p
                    className={pageStyles.mainTextSmaller}
                    style={{ fontSize: "50px" }}
                >
                    To get a filtered image, we need new color values for each
                    image pixel, which we can find by overlaying our{" "}
                    <span className={pageStyles.pinkAccentText}>filter</span>{" "}
                    onto each pixel to compute a weighted sum.
                </p>
                <Arrows
                    prevPage="/intermediate/page_4_int"
                    nextPage="/intermediate/page_6_int"
                    pageNum={5}
                />
            </div>
        </div>
    );
}
