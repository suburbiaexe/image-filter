import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageTwo() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.centerHorzContainer}>
                    <p className={pageStyles.mainRightText}>
                        Within each pixel is an RGBA value that we can represent
                        with a struct, thereby defining our image in memory as
                        an array of structs.
                    </p>
                    <Image
                        src="/images/rgba_struct.png"
                        width={350}
                        height={400}
                        alt="Illustration of an RGBA struct within a single pixel."
                    />
                </div>

                <Arrows
                    prevPage="/advanced/page_1_ad"
                    nextPage="/advanced/page_3_ad"
                    pageNum={2}
                />
            </div>
        </div>
    );
}
