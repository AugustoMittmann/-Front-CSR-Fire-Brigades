import Input from "../components/input";
import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "./homepage.module.css";
import SearchBar from "./components/searchbar";
import ViewCampaigns from "./components/viewCampaignsButton";
import LatestNews from "./components/latestNews";
import DemographicCensus from "./components/demographicCensus";
import Contact from "./components/contactButton";

function Home() {
    return (
      <>
      <div className={styles.wrapper}>
        <section className={styles.firstSection}>
          <div className={styles.brigadasTitle}>
            CONECTANDO BRIGADAS POR TODO O BRASIL
          </div>
          <div>
            <ViewCampaigns />
          </div>
          <div>
            <LatestNews/>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.brigadasTitle}>
            Brigadas
          </div>
          <div>
            Encontre as brigadas mais próximas de você ou cadastre a sua brigada.
          </div>

          <div>
            <ViewBrigades />
          </div>
          <div>
            <Contact />
          </div>       
        </section>

        <section className={styles.footerSection}>
          <div className={styles.footerTitle}>
            Conecte-se com a RNBV!
          </div>
          <div className={styles.footerText}>
            Contribua com as informações da sua brigada voluntária! 
            O Brasil precisa saber quantos somos e quantos grupos 
            não governamentais que atuam na prevenção 
            e combate ao fogo existem.
          </div>
          <div>
            <DemographicCensus/>
          </div>
        </section>

      </div></>
    );
  }

  export default Home
