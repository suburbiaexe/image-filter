import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageOne() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainText}>
                    We can think of images as a coordinate system of pixels, where each pixel represents a color value.
                </p>

                <div className={pageStyles.bottomContainer}>
                    <p className={pageStyles.subtext}>
                        Choose an origin point (0,0). Common origins include the top left and bottom left pixels. We’ll be using the <span className={pageStyles.greenAccentText}>top left</span> pixel as (0,0). 
                    </p>
                    <Image
                        src="/images/origin.png"
                        width={350}
                        height={350}
                        alt="4 by 4 grid with a green dot in the top left square with arrows going down and right."
                    />
                </div>

                <Arrows prevPage="/" nextPage="/intermediate/page_2_int" pageNum={1} />
            </div>
        </div>
    );
}