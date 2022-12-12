import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageOne() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainText}>
                    We can think of images as a coordinate system represented by
                    a 2D array of pixels, where each index stores a color value.
                </p>

                <div className={pageStyles.bottomContainer}>
                    <p className={pageStyles.subtext}>
                        Our origin point will align with our 0th index. We’ll be
                        using the{" "}
                        <span className={pageStyles.greenAccentText}>
                            top left
                        </span>{" "}
                        pixel as (0,0), but another common choice is the bottom
                        left.
                    </p>
                    <Image
                        src="/images/origin.png"
                        width={350}
                        height={350}
                        alt="4 by 4 grid with a green dot in the top left square with arrows going down and right."
                    />
                </div>

                <Arrows
                    prevPage="/"
                    nextPage="/advanced/page_2_ad"
                    pageNum={1}
                />
            </div>
        </div>
    );
}
