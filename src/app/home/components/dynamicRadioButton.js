import React, { useState } from 'react';
import styles from "./dynamicRadioButton.module.css";

const DynamicRadioButtons = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div style={
        {width: "100%", justifyContent: "center", alignItems: "start"}}>      
      {options.map((option) => (
        <div key={option.value} style={{
            width:"100%", 
            display: "flex",
            marginBottom: "6px",
        }}>
          <input
            type="checkbox"
            id={option.value}            
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
            className={styles.radiobutton}
            // style={{
            //     width: "24px",
            //     height: "24px",
            //     appearance: "none",
            //     borderRadius: "50%",
            //     cursor: "pointer",
            //     border: "2px solid #ccc",
            //     marginRight: "8px",
            // }}
            />
          <label htmlFor={option.value} style={{
            font: "normal normal 16px/24px 'Montserrat'"
            }}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};


{/* <div key={option.value} style={{
                    width: "100%", 
                    display: "flex",
            }}>
                <input
                    type="checkbox"
                    id={option.value}            
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                    style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        appearance: "none",
                        backgroundColor: "#f0f0f0",
                        border: "2px solid #ccc",
                        cursor: "pointer",
                        outline: "none",
                        marginRight: "8px",
                    }}
                /> */}

export default DynamicRadioButtons;