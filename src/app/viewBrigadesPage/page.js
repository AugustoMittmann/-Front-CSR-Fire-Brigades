'use client'

import { useState } from "react";
import Button, { ButtonStyle } from "../components/button";
import Footer from "../components/footer";
import GoogleMap from "../components/googleMap";
import Header from "../components/header";
import Input from "../components/input";
import Icons from "../constants/icons";

function ViewBrigades() {
  const [isMapVisible, setIsMapVisible] = useState(false);

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
          <div style={{display: "flex", marginTop: "1rem", width: "100%", justifyContent: "space-between"}}>
            <Button placeholder="Mapa" onPress={() => setIsMapVisible(!isMapVisible)}/>
            <Button placeholder="Filtrar" style={ButtonStyle.standard} secondImage={Icons.filtrar}/>
          </div>
          <div style={{marginTop: "0.5rem"}}>
            {isMapVisible && <GoogleMap/>}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ViewBrigades