import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageSix() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.centerHorzContainer}>
                    <p className={pageStyles.mainRightText}>
                        Then, we center the filter over the <span className={pageStyles.bold}>origin pixel</span> and calculate the new, filtered value of the origin by computing a weighted sum of each surrounding pixel, using the filter values as weights.
                    </p>
                    
                    <Image
                        src="/images/sum.png"
                        width={650}
                        height={425}
                        alt="Illustration of a convolution weighted sum over one image pixel with a filter overlaid on top."
                    />
                </div>

                <Arrows prevPage="/beginner/page_5_beg" nextPage="/beginner/page_7_beg" pageNum={6} />
            </div>
        </div>
    );
}