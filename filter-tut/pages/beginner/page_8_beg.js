import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Beginner.module.css";
import Link from "next/link";

export default function BegPageEight() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Image Filtering for Beginners</title>
            </Head>
            
            <div className={pageStyles.centerContainer}>
                <p className={pageStyles.centerText}>
                    And that's how convolution, and therefore image filtering, works! Not so bad, right?
                </p>
                <div className={pageStyles.endButtons}>
                    <Link href="/beginner/page_7_beg">
                        <span className={pageStyles.linkText}><u>Wait, let me see that again...</u></span>
                    </Link>
                    <Link href="/">
                        <span className={pageStyles.linkText}><u>Awesome, let me return home!</u></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}