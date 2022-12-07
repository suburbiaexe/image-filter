import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Beginner.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageOne() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Oswald&display=swap" rel="stylesheet" />
            </Head>

            <div className={pageStyles.pageContainer}>
                <p className={pageStyles.mainText}>
                    We can think of images as a coordinate system of pixels, where each pixel represents a color value.
                </p>

                <Arrows prevPage="/" nextPage="/" />

                <div className={pageStyles.bottomContainer}>
                    <p className={pageStyles.subtext}>
                        Choose an origin point (0,0). We’ll be using the <span className={pageStyles.greenAccentText}>top left</span> pixel as (0,0).
                    </p>
                    <Image
                        src="/images/origin.png"
                        width={250}
                        height={250}
                        alt="4 by 4 grid with a green dot in the top left square with arrows going down and right."
                    />
                </div>
            </div>
        </div>
    );
}