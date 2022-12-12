import Head from "next/head";
import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Subpages.module.css";
import Arrows from "../components/arrows.js";

export default function AdvPageSix() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Advanced Image Filtering</title>
            </Head>

            <div className={pageStyles.mainContainer}>
                <div className={pageStyles.centerHorzContainer}>
                    <p
                        className={pageStyles.mainRightText}
                        style={{ fontSize: "35px", width: "45%" }}
                    >
                        Convolution is also an{" "}
                        <span className={pageStyles.pinkAccentText}>
                            associative
                        </span>{" "}
                        and{" "}
                        <span className={pageStyles.pinkAccentText}>
                            commutative
                        </span>{" "}
                        process, so applying multiple filters one after another
                        is equivalent to applying one filter that does all of
                        those things, and you can apply as many filters in any
                        order that you’d like and always end up with the same
                        effect.
                    </p>
                    <ul>
                        <li
                            className={pageStyles.mainLeftText}
                            style={{
                                fontSize: "40px",
                                width: "100%",
                                color: "var(--accent-pink)",
                            }}
                        >
                            Associative
                        </li>
                        <ul>
                            <li
                                className={pageStyles.mainLeftText}
                                style={{
                                    fontSize: "30px",
                                    width: "100%",
                                    marginBottom: "1em",
                                }}
                            >
                                (((A * B) * C) * D) = A * (B * C * D)
                            </li>
                        </ul>
                        <li
                            className={pageStyles.mainLeftText}
                            style={{
                                fontSize: "40px",
                                width: "100%",
                                color: "var(--accent-pink)",
                            }}
                        >
                            Commutative
                        </li>
                        <ul>
                            <li
                                className={pageStyles.mainLeftText}
                                style={{ fontSize: "30px", width: "100%" }}
                            >
                                A * B = B * A
                            </li>
                        </ul>
                    </ul>
                </div>
                <Arrows
                    prevPage="/advanced/page_5_ad"
                    nextPage="/advanced/page_7_ad"
                    pageNum={6}
                />
            </div>
        </div>
    );
}
