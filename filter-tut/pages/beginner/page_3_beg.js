import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Beginner.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageThree() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    Because the filter function is computed over each pixel in an image, the function may end up being computed over "out of bounds" pixels when the filter aligns with an edge pixel. To counteract this, we can "pad" the image with 0s.
                </p>

                <Image
                    src="/images/padding.png"
                    width={325}
                    height={325}
                    alt="Illustration of an image with 0s lining each pixel around the image."
                    style={{paddingBottom: '1em'}}
                />

                <Arrows prevPage="/beginner/page_2_beg" nextPage="/beginner/page_4_beg" pageNum={3} />
            </div>
        </div>
    );
}