import React from "react";
import Icons from "../constants/icons";
import Image from "next/image";

const Loading = () => (
  <div className="spinner" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
    <Image
      src={Icons.loading.value}
      alt="Loading"
      width={50}
      height={50}/>    
  </div>
);

export default Loading;
