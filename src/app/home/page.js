import Input from "../components/input";
import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "./homepage.module.css";
import SearchBar from "./components/searchbar";
import ViewCampaigns from "./components/viewCampaignsButton";

function Home() {
    return (
      <>
      <div className={styles.wrapper}>
        <Header />
        <section className={styles.firstSection}>
          <div className={styles.brigadasTitle}>
            CONECTANDO BRIGADAS POR TODO O BRASIL
          </div>
          <div className={styles.viewBrigadesButton}>
            <ViewCampaigns />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.brigadasTitle}>
            Brigadas
          </div>
          <div>
            Encontre as brigadas mais próximas de você ou cadastre a sua brigada.
          </div>
          <div className={styles.viewBrigadesButton}>
            <ViewBrigades />
          </div>
          <div>
            <AddNewBrigade />
          </div>
          <div className={styles.feedTitle}>
            Feed de Notícias
          </div>
          <div>
            Encontre aqui as publicações de nossas brigadas voluntárias nas redes sociais.
          </div>
          <div className={styles.filterSide}>
            <div className={styles.searchBar}>
              <SearchBar placeholder="Pesquisar Notícia" />
            </div>
            <div className={styles.buttonSearch}>
              <FilterButton />
            </div>
          </div>
        </section>
        <Footer />
      </div></>
    );
  }

  export default Home
