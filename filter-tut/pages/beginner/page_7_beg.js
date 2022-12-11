import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageSeven() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    We repeat the weighted sum process for every pixel in the image (always using original pixel color values) until we end up with the <span className={pageStyles.pinkAccentText}>final, filtered image</span>.
                </p>
                
                <Image
                    src="/images/final_image.png"
                    width={950}
                    height={400}
                    alt="bruh" 
                    style={{paddingBottom:"1em"}}
                />

                <Arrows prevPage="/beginner/page_6_beg" nextPage="/beginner/page_8_beg" pageNum={7} />
            </div>
        </div>
    );
}