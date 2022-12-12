import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageThree() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    Because the filter function is computed over each pixel in
                    an image, the function may end up being computed over
                    &quot;out of bounds&quot; pixels when the filter aligns with
                    an edge pixel. To counteract this, we can &quot;pad&quot;
                    the image with 0s.
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
                    prevPage="/beginner/page_2_beg"
                    nextPage="/beginner/page_4_beg"
                    pageNum={3}
                />
            </div>
        </div>
    );
}
