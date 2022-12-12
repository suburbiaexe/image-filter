import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageSeven() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    First, we{" "}
                    <span className={pageStyles.greenAccentText}>
                        pad our image with 0s
                    </span>
                    . This is because overlaying our filter on edge pixels can
                    mean that the filter will be applied to nonexistent values.
                </p>
                <div className={pageStyles.bottomContainer}>
                    <Image
                        src="/images/oob.png"
                        width={350}
                        height={325}
                        alt="Illustration of a filter overlaid on the edge pixels of an image."
                        style={{ paddingRight: "1em" }}
                    />
                    <p style={{ fontSize: "40px" }}>&rarr;</p>
                    <Image
                        src="/images/padding.png"
                        width={350}
                        height={335}
                        alt="Illustration of an image with 0s lining each pixel around the image."
                        style={{ paddingLeft: "1em" }}
                    />
                </div>
                <Arrows
                    prevPage="/intermediate/page_6_int"
                    nextPage="/intermediate/page_8_int"
                    pageNum={7}
                />
            </div>
        </div>
    );
}
