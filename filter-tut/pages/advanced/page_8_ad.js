import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageEight() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    At edge cases, we can{" "}
                    <span className={pageStyles.greenAccentText}>
                        pad our image with 0s
                    </span>{" "}
                    so the filter weights aren’t multiplied with nonexistent
                    values. Another common solution is to pad the image by
                    copying its edge pixel values.
                </p>
                <Image
                    src="/images/padding.png"
                    width={350}
                    height={350}
                    alt="Illustration of an image with 0s lining each pixel around the image."
                    style={{ paddingBottom: "2em" }}
                />
                <Arrows
                    prevPage="/advanced/page_7_ad"
                    nextPage="/advanced/page_9_ad"
                    pageNum={8}
                />
            </div>
        </div>
    );
}
