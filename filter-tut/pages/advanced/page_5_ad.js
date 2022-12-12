import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageFive() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
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
                        Filtering an image is just convolution, and different
                        filter effects are just defined by different{" "}
                        <span className={pageStyles.pinkAccentText}>
                            kernels
                        </span>{" "}
                        we use to convolve over an image.
                    </p>
                </div>
                <Arrows
                    prevPage="/advanced/page_4_ad"
                    nextPage="/advanced/page_6_ad"
                    pageNum={5}
                />
            </div>
        </div>
    );
}
