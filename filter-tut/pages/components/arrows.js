import Link from "next/link";
import styles from "../../styles/Components.module.css";

export default function PageArrows(props) {
    console.log(props.prevPage);
    return (
        <div className={styles.container}>
            <Link href={props.prevPage}>
                <span className={styles.arrow}>&larr;</span>
            </Link>
            <Link href={props.nextPage}>
                <span className={styles.arrow}>&rarr;</span>
            </Link>
        </div>
    );
}