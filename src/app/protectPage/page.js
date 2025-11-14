"use client";

import React from "react";
import LogoutButton from "./logoutButton";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/loading";
import Table from "../components/table";
import Button from "../components/button";
import Header from "../components/header";

const ProtectedPage = () => {
  const columns = ["Brigada", "E-mail", "Ações"];
  const rows = [
    {
      brigada: "XXXXX",
      email: "brigadagx@fogo.com",
      acoes: (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <Button placeholder="Editar" />
          <Button placeholder="Deletar" />
        </div>
      )
    },
    {
      brigada: "YYYYY",
      email: "brigaday@fogo.com",
      acoes: (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <Button placeholder="Editar" />
          <Button placeholder="Deletar" />
        </div>
      )
    }
  ];

  return (
    <div style={{ opacity: "1", transition: "opacity 0.5s" }}>
      <Header />
      <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LogoutButton />
        <div style={{ marginTop: '1rem' }}>
          <Table columns={columns} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(ProtectedPage, {
  onRedirecting: () => <Loading />,
});
