import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageFive() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.mainHorzContainer}>
                    <Image
                        src="/images/beg_image.png"
                        width={325}
                        height={325}
                        alt="Illustration of a 0-padded image where each pixel has a number value."
                        style={{padding:'1em'}}
                    />
                    <Image
                        src="/images/filter.png"
                        width={200}
                        height={200}
                        alt="Illustration of a 3 by 3 filter where each pixel says one-ninth."
                        style={{padding:'1em'}}
                    />
                </div>

                <p className={pageStyles.mainTextSmaller} style={{fontSize:'40px'}}>
                    We start with a 0-padded image and a <span className={pageStyles.pinkAccentText}>filter</span>, with 'pixels' containing values calculated by the function we want to apply all over the image. Different filters use different functions, which produce different filter values. The above filter will blur the image.
                </p>

                <Arrows prevPage="/beginner/page_4_beg" nextPage="/beginner/page_6_beg" pageNum={5} />
            </div>
        </div>
    );
}