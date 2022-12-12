import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Link from "next/link";

export default function IntPageTen() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intermediate Image Filtering</title>
            </Head>

            <div className={pageStyles.centerContainer}>
                <p className={pageStyles.mainText} style={{ fontSize: "50px" }}>
                    That’s really all there is to convolution! We might also
                    note that convolution is both{" "}
                    <span className={pageStyles.bold}>
                        commutative and associative
                    </span>
                    , which allows you to apply as many filters as you want in
                    any order to your image. Cool, right?
                </p>
                <div className={pageStyles.endButtons}>
                    <Link href="/intermediate/page_9_int">
                        <span className={pageStyles.linkText}>
                            <u>Hm, I’m still iffy about something…</u>
                        </span>
                    </Link>
                    <Link href="/">
                        <span className={pageStyles.linkText}>
                            <u>Awesome, let me return home!</u>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
