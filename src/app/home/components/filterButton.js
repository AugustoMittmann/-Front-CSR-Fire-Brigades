'use client';

import Icons from "../../constants/icons";
import Image from "next/image";
import styles from "./filterButton.module.css";
import { useState } from 'react'
import FilterPopup from "./testAnimatedPopup";

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.button} onClick={togglePopup}>
        <div>
            Filtrar
        </div>
        <div>
        <Image
            src={Icons.filtrar.value}
            alt={Icons.filtrar.alt}
            height={32}
            width={24}
        />
        </div>
      </button>
      {isOpen && <FilterPopup enablePopupFunction={() => togglePopup} />}
    </>
  );

  // (
  //   <div style={{
  //     position: 'fixed',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     zIndex: 1000,
  //   }}>
  //     <div style={{
  //       backgroundColor: 'white',
  //       padding: '20px',
  //       borderRadius: '5px',
  //     }}>
  //       <p>This is the popup content.</p>
  //       <button onClick={togglePopup}>Close</button>
  //     </div>
  //   </div>
  // )

  // function openFilterPopup() { 
  //   debugger;    
  //   // return PopupGfg();
  //   let popup = Popup(isOpen, setIsOpen);
  //   setIsOpen(!isOpen);
  //   return popup;
  // }
}
