import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function BegPageThree() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <p className={pageStyles.mainText} style={{width:'85%'}}>
                    A color, for our purposes, can be represented as an RGBA value, which we can represent with a data structure of 4 numbers to represent one color. So, one pixel holds some structure of 4 numbers.
                </p>

                <Image
                    src="/images/rgba.png"
                    width={450}
                    height={140}
                    alt="bre."
                    style={{paddingBottom: '1em'}}
                />

                <Arrows prevPage="/intermediate/page_1_int" nextPage="/" pageNum={2} />
            </div>
        </div>
    );
}