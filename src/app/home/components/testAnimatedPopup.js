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
  }, [modal])

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
      justifyContent: "center"
    }}>
      <form
        id="contactForm"
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%"                    
        }}
      >
        <Input label="Filtro 1" placeholder="filtro test"/>
        <Input label="Filtro 2" placeholder="filtro test"/>
        <Input label="Filtro 3" placeholder="filtro test"/>
      </form>
      
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