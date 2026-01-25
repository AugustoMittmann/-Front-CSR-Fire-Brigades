import FAQ from './components/FAQ'
import styles from "./FAQpage.module.css";

function FAQPage() {

    return (
      <div className={styles.page}>
        <div className={styles.ajuda}>
          Ajuda
        </div>
        <div className={styles.content}>
          <FAQ />
        </div>
      </div>
    );
  }
  
  export default FAQPage