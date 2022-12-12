import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageThree() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainTextSmaller}>
                    (Aside) We could represent an image as a struct of arrays,
                    where we have one array of every single{" "}
                    <span style={{ color: "var(--r)" }}>R</span> value in the
                    image, one array of every single{" "}
                    <span style={{ color: "var(--g)" }}>G</span> value, and so
                    forth, but this method is less common and only more
                    efficient if you expect to read all the pixels in a given
                    channel.
                </p>
                <Image
                    src="/images/aos_soa.png"
                    width={800}
                    height={250}
                    alt="Illustration of an array of structs versus a struct of arrays."
                    style={{ marginBottom: "1em" }}
                />
                <Arrows
                    prevPage="/advanced/page_2_ad"
                    nextPage="/advanced/page_4_ad"
                    pageNum={3}
                />
            </div>
        </div>
    );
}
