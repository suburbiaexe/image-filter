import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Link from "next/link";

export default function AdvPageThirteen() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.centerContainer}>
                <p className={pageStyles.mainText}>
                    And those are the basics of image filtering! Now go forth,
                    and filter responsibly.
                </p>
                <div className={pageStyles.endButtons}>
                    <Link href="/advanced/page_12_ad">
                        <span className={pageStyles.linkText}>
                            <u>I don’t know if I’m ready yet…</u>
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
