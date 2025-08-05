import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "./homepage.module.css";
import SearchBar from "./components/searchbar";

function Home() {
    return (
      <>
      <div className={styles.wrapper}>
        <Header />
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
        <section>
        <div className={styles.containerInstagram}>
          <div className={styles.itemInstagramArrow}> {`<`} </div>
          <div className={styles.itemInstagram}>
            <script async src="//www.instagram.com/embed.js" />
            <blockquote 
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/apple/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{ 
                width: "90%",
                height: "140px",
                margin: "0px 0px 10px"
                }}
                />
          </div>
          <div className={styles.itemInstagramArrow}> {`>`} </div>
        </div>
        <div className={styles.containerInstagram}>
          <div className={styles.itemInstagramArrow}> {`<`} </div>
          <div className={styles.itemInstagram}>
            <script async src="//www.instagram.com/embed.js" />
            <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/instagram/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ 
                  width: "90%",
                  height: "140px",
                  margin: "0px 0px 10px"
                  }}
                  />
          </div>
          <div className={styles.itemInstagramArrow}> {`>`} </div>
        </div>
        <div>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/portalg1/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "1200px",
              minWidth: "326px",
              padding: "0",
              width: "99.375%",
              width: "calc(100% - 2px)"
            }}
          ></blockquote>
        </div>
        </section>
        <Footer />
      </div></>
    );
  }

  export default Home