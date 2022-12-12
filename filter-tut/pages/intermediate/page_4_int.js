import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function IntPageFour() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div
                    className={pageStyles.mainHorzContainer}
                    style={{ paddingBottom: "3em" }}
                >
                    <Image
                        src="/images/common_filters.png"
                        width={575}
                        height={500}
                        alt="Illustration of blur, sharpen, and shift filters."
                    />
                    <p
                        className={pageStyles.mainLeftText}
                        style={{ fontSize: "50px", paddingLeft: "1em" }}
                    >
                        A{" "}
                        <span className={pageStyles.pinkAccentText}>
                            filter, or kernel,
                        </span>{" "}
                        can be represented by a grid or matrix containing
                        numbers in each cell calculated by a function that will
                        create the desired filter effect.
                    </p>
                </div>
                <Arrows
                    prevPage="/intermediate/page_3_int"
                    nextPage="/intermediate/page_5_int"
                    pageNum={4}
                />
            </div>
        </div>
    );
}
