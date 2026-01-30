'use client'

import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ArticleCard from "./components/articleCard";
import styles from "./artigosPage.module.css";
import Image from "next/image";

export default function ArtigosPage() {
  const [articles] = useState([
    {
      id: 1,
      category: "Campanha",
      categoryColor: "#1E88E5",
      title: "Título da Notícia",
      description: "Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed urna sed neque blandit gravida vitae bibendum dictum. Lorem dolor...",
      image: "/placeholder-brigade.svg"
    },
    {
      id: 2,
      category: "Boas Práticas",
      categoryColor: "#7CB342",
      title: "Título da Notícia",
      description: "Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed urna sed neque blandit gravida vitae bibendum dictum. Lorem dolor...",
      image: "/placeholder-brigade.svg"
    },
    {
      id: 3,
      category: "Artigo",
      categoryColor: "#F9A825",
      title: "Título da Notícia",
      description: "Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed urna sed neque blandit gravida vitae bibendum dictum. Lorem dolor...",
      image: "/placeholder-brigade.svg"
    },
    {
      id: 4,
      category: "Notícia",
      categoryColor: "#D32F2F",
      title: "Título da Notícia",
      description: "Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed urna sed neque blandit gravida vitae bibendum dictum. Lorem dolor...",
      image: "/placeholder-brigade.svg"
    }
  ]);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.titleContainer}>
          <h1 className={styles.pageTitle}>Artigos e Notícias</h1>
          <button className={styles.filterButton} aria-label="Filtrar artigos">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#39542D"/>
            </svg>
          </button>
        </div>

        <div className={styles.articlesContainer}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <section className={styles.ctaSection}>
          <div className={styles.ctaImageContainer}>
            <Image
              src="/juntos-somos-fortes.svg"
              alt="Juntos somos mais fortes"
              width={390}
              height={200}
              className={styles.ctaImage}
            />
          </div>
          <p className={styles.ctaText}>
            A expressão "Juntos somos mais fortes" é perfeita para a realidade das Brigadas Voluntárias e para demonstrar a nossa força e preciso que a sua organização faça parte deste esforço.
          </p>

          <div className={styles.ctaLinks}>
            <a href="https://instagram.com" className={styles.ctaLink} target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#D32F2F">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
              <span>Acesse o nosso Instagram</span>
            </a>

            <a href="/FAQPage" className={styles.ctaLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#F9A825">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 16v.01M12 13a2 2 0 0 0-1-1.73 2 2 0 1 1 1-3.46" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
              <span>Dúvidas Frequentes</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <div className={styles.copyright}>
        © 2025 RNBV - Rede Nacional de Brigadas Voluntárias
      </div>
    </div>
  );
}
