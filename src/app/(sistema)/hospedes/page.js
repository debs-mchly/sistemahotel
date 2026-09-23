"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./hospedes.module.css";

export default function Hospedes() {
  const [hospedes] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const dados = sessionStorage.getItem("hospedes");

    return dados ? JSON.parse(dados) : [];
  });

  const [busca, setBusca] = useState("");

  const hospedesFiltrados = hospedes.filter((hospede) =>
    hospede.nome?.toLowerCase().includes(busca.toLowerCase()) ||
    hospede.cpf?.includes(busca) ||
    hospede.email?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.page}>

      {/* BARRA SUPERIOR */}
      <header className={styles.topbar}>

        <div className={styles.topbarLeft}>
          <span>🏨 Hotel Grand Plaza</span>
          <span className={styles.separator}>/</span>
          <span>Central de Reservas</span>
        </div>

        <div className={styles.topbarRight}>

          <div className={styles.searchTop}>
            🔍
            <span>Buscar hóspedes, quartos...</span>
          </div>

          <div className={styles.notification}>
            🔔
          </div>

          <div className={styles.user}>
            <div>
              <strong>Carlos Mendes</strong>
              <span>Gerente de Turno</span>
            </div>
          </div>

          <div className={styles.userIcon}>
            👤
          </div>

        </div>

      </header>

      {/* CABEÇALHO */}
      <section className={styles.pageHeader}>

        <div className={styles.breadcrumb}>
          🏠
          <span>›</span>
          <span>Hóspedes</span>
          <span>›</span>
          <strong>Cadastrados</strong>
        </div>

        <h1>Hóspedes Cadastrados</h1>

        <p>
          Consulte os hóspedes cadastrados no sistema do hotel.
        </p>

      </section>

      {/* CONTEÚDO */}
      <main className={styles.content}>

        <section className={styles.card}>

          {/* CABEÇALHO DO CARD */}
          <div className={styles.cardHeader}>

            <div>
              <h2>Lista de Hóspedes</h2>

              <p>
                Visualize as informações dos hóspedes cadastrados
              </p>
            </div>

            <Link
              href="/hospedes/novo"
              className={styles.newButton}
            >
              ＋ &nbsp;Novo Cadastro
            </Link>

          </div>

          {/* CAMPO DE BUSCA */}
          <div className={styles.searchBox}>

            <span className={styles.searchIcon}>
              🔍
            </span>

            <input
              type="text"
              placeholder="Buscar por nome, CPF ou e-mail..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />

          </div>

          {/* TOTAL */}
          <div className={styles.total}>
            Total: <strong>{hospedes.length}</strong>
          </div>

          {/* LISTA */}
          <div className={styles.guestList}>

            {hospedesFiltrados.length === 0 ? (

              <div className={styles.empty}>

                <div className={styles.emptyIcon}>
                  👤
                </div>

                <h3>
                  {hospedes.length === 0
                    ? "Nenhum hóspede cadastrado"
                    : "Nenhum resultado encontrado"}
                </h3>

                <p>
                  {hospedes.length === 0
                    ? "Cadastre um novo hóspede para começar."
                    : "Tente pesquisar utilizando outro nome, CPF ou e-mail."}
                </p>

              </div>

            ) : (

              hospedesFiltrados.map((hospede) => (

                <div
                  className={styles.guestRow}
                  key={hospede.id}
                >

                  <div className={styles.avatar}>
                    👤
                  </div>

                  <div className={styles.guestName}>
                    <strong>{hospede.nome}</strong>
                  </div>

                  <div className={styles.guestInfo}>
                    <span className={styles.infoLabel}>
                      CPF:
                    </span>

                    <span>
                      {hospede.cpf}
                    </span>
                  </div>

                  <div className={styles.guestInfo}>
                    <span className={styles.infoLabel}>
                      Telefone:
                    </span>

                    <span>
                      {hospede.telefone}
                    </span>
                  </div>

                  <div className={styles.guestInfo}>
                    <span className={styles.infoLabel}>
                      E-mail:
                    </span>

                    <span>
                      {hospede.email}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={styles.viewButton}
                  >
                    👁
                  </button>

                </div>

              ))

            )}

          </div>

        </section>

      </main>

      {/* RODAPÉ */}
      <footer className={styles.footer}>
        HotelPro Admin v4.2.0 • Sistema de Gestão Hoteleira Profissional
      </footer>

    </div>
  );
}