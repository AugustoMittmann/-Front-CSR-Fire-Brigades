'use client'

import Button, { ButtonStyle } from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import Input from "../components/input";
import FilterButton from "../home/components/filterButton";

function ViewBrigades() {
  return (
    <>
      <Header/>
      <div style={{margin: "1rem"}}>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          <span style={{color: "#39542D", fontWeight: "bolder", fontSize: "1rem", width: "100%", marginBottom: "1rem", font: "normal normal bold 24px/29px 'Montserrat'", fontFamily: "'Montserrat', sans-serif"}}>Visualizar Brigadas</span>

          <span style={{color: "#39542D", width: "100%", marginBottom: "1rem", font: "normal normal normal 16px/20px 'Montserrat'", fontFamily: "'Montserrat', sans-serif"}}>Navegue pela lista ou pelo mapa para encontrar a Brigada mais próxima de você.</span>
          <div style={{width: "100%"}}>
            <Input placeholder={"Pesquisar Brigada"} width={"100%"}/>
          </div>
          <div style={{display: "flex", gap: "0.7rem", alignItems: "center", textAlign: "center", marginTop: "1.2rem", width: "100%"}}>
          <div style={{flexGrow: 1}}>
            <Button placeholder="Mapa"/>
          </div>
          <div style={{flexGrow: 1}}>
            <FilterButton />
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ViewBrigades