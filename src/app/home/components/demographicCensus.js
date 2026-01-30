import styles from "./demographicCensus.module.css";
import Link from "next/link";

export default function DemographicCensus() {
  return (
    <Link href="/viewCensusPage">
        <div className={styles.button}>          
            <div className={styles.content}>
                Preencher o Censo Demográfico
            </div>            
        </div>
    </Link>
  );
}