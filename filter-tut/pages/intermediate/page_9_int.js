import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageNine() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.centerHorzContainer}>
                <p
                    className={pageStyles.mainLeftText}
                    style={{ fontSize: "50px", marginRight: "1em" }}
                >
                    We repeat this process for every pixel in the image (always
                    using original pixel color values) until we end up with the{" "}
                    <span className={pageStyles.pinkAccentText}>
                        final, filtered image
                    </span>
                    .
                </p>
                <Image
                    src="/images/rgba_final.png"
                    width={425}
                    height={400}
                    alt="Illustration a RGBA image with new RGB values after filtering"
                />
            </div>

            <Arrows
                prevPage="/intermediate/page_8_int"
                nextPage="/intermediate/page_10_int"
                pageNum={9}
            />
        </div>
    );
}
