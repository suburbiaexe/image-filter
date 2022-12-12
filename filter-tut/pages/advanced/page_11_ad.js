import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageEleven() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    Performing 2D convolution on an image with separable
                    kernels, then, is equivalent to multiplying the results of
                    convolving over the image columns with the{" "}
                    <span className={pageStyles.pinkAccentText}>
                        vertical kernel
                    </span>{" "}
                    and convolving over the image rows with the{" "}
                    <span className={pageStyles.pinkAccentText}>
                        horizontal kernel
                    </span>
                    . (And because convolution is commutative, the order doesn’t
                    matter!)
                </p>
                <Image
                    src="/images/separable_conv.png"
                    width={775}
                    height={300}
                    alt="Illustration of a vertical filter convolving over image columns multiplied by a horizontal filter convolving over image rows."
                    style={{ paddingBottom: "1em" }}
                />
                <Arrows
                    prevPage="/advanced/page_10_ad"
                    nextPage="/advanced/page_12_ad"
                    pageNum={11}
                />
            </div>
        </div>
    );
}
