'use client'

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useState } from 'react'

export default function FilterPopup({enablePopupFunction: any}) {
  const modal = useRef(null);
  const router = useRouter();
  const [popupEnabled, setEnabled] = useState(true);

  const saveFilter = () => {           
    setEnabled(false);
  };

  useEffect(() => {    
    const appearingFromTop = [
      { transform: "translateY(-50%)" },
      { transform: "translateY(0%)" }
    ];
    const modalTiming = {
      duration: 300,
      iterations: 1
    };
    
    modal.current.animate(appearingFromTop, modalTiming);    
    tagSelector();
  }, [modal])

  function tagSelector() {
    const filterTags = document.getElementById('tagFilter').querySelectorAll('.tag');
    const sorterTags = document.getElementById('tagSorter').querySelectorAll('.tag');
    addActiveTagEventListener(filterTags);
    addActiveTagEventListener(sorterTags);
  }

  function addActiveTagEventListener(tags) {
    tags.forEach(tag => {
      tag.addEventListener('click', () => {
          tags.forEach(btn => btn.classList.remove('active'));
          tag.classList.add('active');
      });
    });  
  }

  return popupEnabled && (
    <div 
    ref={modal}    
    style={{
      position: 'fixed',
      top: "0",
      left: "0",      
      width: '100%',
      height: '50%',
      color: "#000000",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      border: "1px solid rgba(0,0,0,0.5)",
      borderRadius: "5% 5% 0 0",
      padding: "1rem",
      zIndex: "1000",
      display: "flex",
      flexWrap: "wrap",
      textAlign: "center",
      // justifyContent: "center"
    }}>

      <span style={{
        color: "#39542D",
        fontWeight: "bolder",
        fontSize: "1rem",
        width: "50%",
        font: "normal normal bold 16px/24px 'Montserrat'",
        fontFamily: "'Montserrat', sans-serif",
        display: "flex",
        justifyContent: "left",
        alignItems: "center"
      }}>Filtrar</span>
      <div id="tagFilter" className="tag-filter" style={
        {width: "100%", display: "flex", justifyContent: "left", alignItems: "center"}}>
          <button className="tag" data-filter="filter1">Placeholder</button>
          <button className="tag" data-filter="filter2">Placeholder</button>
          <button className="tag active" data-filter="filter3">Selecionado</button>          
      </div>

      <span style={{
        color: "#39542D",
        fontWeight: "bolder",
        fontSize: "1rem",
        width: "50%",
        font: "normal normal bold 16px/24px 'Montserrat'",
        fontFamily: "'Montserrat', sans-serif",
        display: "flex",
        justifyContent: "left",
        alignItems: "center"
      }}>Ordenar</span>
      <div id="tagSorter" className="tag-filter" style={
        {width: "100%", display: "flex", justifyContent: "left", alignItems: "center"}}>
          <button className="tag" data-filter="sort1">Ordem A-Z</button>
          <button className="tag" data-filter="sort2">Ordem Z-A</button>
          <button className="tag active" data-filter="sort3">Proximidade</button>          
      </div>
      
      <div style={
        {width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>        
        <Button
          placeholder="Salvar filtros"
          onPress={() => {
            document.body.style.transition = "opacity 0.5s";
            document.body.style.opacity = "1";
            saveFilter();
          }}
        />
      </div>
    </div>
  );
}