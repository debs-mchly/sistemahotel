"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./quarto.module.css";

const quartos = [
  {
    id: 101,
    nome: "Quarto 101",
    tipo: "Standard",
    capacidade: "2 pessoas",
    diaria: "R$ 250",
    status: "Livre",
    andar: 1,
  },
  {
    id: 102,
    nome: "Quarto 102",
    tipo: "Luxo",
    capacidade: "4 pessoas",
    diaria: "R$ 450",
    status: "Ocupado",
    andar: 1,
  },
  {
    id: 103,
    nome: "Quarto 103",
    tipo: "Executivo",
    capacidade: "3 pessoas",
    diaria: "R$ 300",
    status: "Reservado",
    andar: 1,
  },
  {
    id: 104,
    nome: "Quarto 104",
    tipo: "Standard",
    capacidade: "2 pessoas",
    diaria: "R$ 250",
    status: "Manutenção",
    andar: 1,
  },
  {
    id: 201,
    nome: "Quarto 201",
    tipo: "Standard",
    capacidade: "2 pessoas",
    diaria: "R$ 250",
    status: "Livre",
    andar: 2,
  },
  {
    id: 202,
    nome: "Quarto 202",
    tipo: "Luxo",
    capacidade: "4 pessoas",
    diaria: "R$ 450",
    status: "Livre",
    andar: 2,
  },
  {
    id: 203,
    nome: "Quarto 203",
    tipo: "Executivo",
    capacidade: "3 pessoas",
    diaria: "R$ 300",
    status: "Ocupado",
    andar: 2,
  },
  {
    id: 204,
    nome: "Quarto 204",
    tipo: "Standard",
    capacidade: "2 pessoas",
    diaria: "R$ 250",
    status: "Livre",
    andar: 2,
  },
];

export default function QuartosPage() {
  const router = useRouter();

  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("Todos os Status");

  // =========================
  // FILTRO
  // =========================

  const termo = busca.toLowerCase().trim();

  const quartosFiltrados = quartos.filter((quarto) => {
    const buscaOK =
      termo === "" ||
      quarto.nome.toLowerCase().includes(termo) ||
      quarto.tipo.toLowerCase().includes(termo) ||
      String(quarto.id).includes(termo);

    const statusOK =
      statusFiltro === "Todos os Status" ||
      quarto.status === statusFiltro;

    return buscaOK && statusOK;
  });

  // =========================
  // RESUMOS
  // =========================

  const totalQuartos = quartos.length;

  const quartosLivres = quartos.filter(
    (quarto) => quarto.status === "Livre"
  ).length;

  const quartosOcupados = quartos.filter(
    (quarto) => quarto.status === "Ocupado"
  ).length;

  const quartosManutencao = quartos.filter(
    (quarto) => quarto.status === "Manutenção"
  ).length;

  // =========================
  // FUNÇÕES
  // =========================

  function verDetalhes(quarto) {
    sessionStorage.setItem(
      "quartoSelecionado",
      JSON.stringify(quarto)
    );

    router.push(`/quartos/${quarto.id}`);
  }

  function novoQuarto() {
    router.push("/quartos/novo");
  }

  // =========================
  // STATUS
  // =========================

  function classeStatus(status) {
    switch (status) {
      case "Livre":
        return styles.statusLivre;

      case "Ocupado":
        return styles.statusOcupado;

      case "Reservado":
        return styles.statusReservado;

      case "Manutenção":
        return styles.statusManutencao;

      default:
        return "";
    }
  }

  // =========================
  // CARD DO QUARTO
  // =========================

  function CardQuarto({ quarto }) {
    return (
      <article className={styles.roomCard}>

        <div className={styles.roomHeader}>
          <strong>{quarto.nome}</strong>

          <span
            className={`${styles.status} ${classeStatus(
              quarto.status
            )}`}
          >
            {quarto.status}
          </span>
        </div>

        <div className={styles.roomInfo}>

          <p>
            <span>Tipo:</span>
            {quarto.tipo}
          </p>

          <p>
            <span>Capacidade:</span>
            {quarto.capacidade}
          </p>

          <p>
            <span>Diária:</span>
            {quarto.diaria}
          </p>

        </div>

        <button
          type="button"
          className={styles.detailsButton}
          onClick={() => verDetalhes(quarto)}
        >
          Ver Detalhes
        </button>

      </article>
    );
  }

  const quartosAndar1 = quartosFiltrados.filter(
    (quarto) => quarto.andar === 1
  );

  const quartosAndar2 = quartosFiltrados.filter(
    (quarto) => quarto.andar === 2
  );

  return (
    <div className={styles.page}>

      {/* =========================
          CONTEÚDO PRINCIPAL
      ========================= */}

      <main className={styles.main}>

        {/* =========================
            TOPBAR
        ========================= */}

        <header className={styles.topbar}>

          <div className={styles.topHotel}>
            Hotel Grand Plaza
            <span> / Central de Reservas</span>
          </div>

          <div className={styles.admin}>
            <span>Admin Panel</span>

            <div className={styles.adminAvatar}>
              A
            </div>
          </div>

        </header>

        {/* =========================
            CABEÇALHO
        ========================= */}

        <section className={styles.header}>

          <div className={styles.breadcrumb}>
            Quartos
            <span>›</span>
            Visão Geral
          </div>

          <h1>Quartos Cadastrados</h1>

          <p>
            Consulte a disponibilidade, tarifas e gerencie os
            estados de todos os quartos do hotel.
          </p>

        </section>

        {/* =========================
            CARDS DE RESUMO
        ========================= */}

        <section className={styles.summaryGrid}>

          <div className={styles.summaryCard}>
            <div className={styles.summaryInfo}>
              <span>TOTAL DE QUARTOS</span>
              <strong>{totalQuartos}</strong>
            </div>

            <small>
              unidades cadastradas
            </small>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryInfo}>
              <span>QUARTOS LIVRES</span>
              <strong>{quartosLivres}</strong>
            </div>

            <small className={styles.greenText}>
              Disponíveis agora
            </small>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryInfo}>
              <span>QUARTOS OCUPADOS</span>
              <strong>{quartosOcupados}</strong>
            </div>

            <small className={styles.redText}>
              Check-ins ativos
            </small>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryInfo}>
              <span>EM MANUTENÇÃO</span>
              <strong>{quartosManutencao}</strong>
            </div>

            <small className={styles.orangeText}>
              Necessitam atenção
            </small>
          </div>

        </section>

        {/* =========================
            FILTROS
        ========================= */}

        <section className={styles.filters}>

          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Buscar Quarto (Ex.: 101)..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className={styles.dateBox}>
            <span>▣</span>

            <input
              type="date"
              defaultValue="2026-10-24"
            />
          </div>

          <select
            className={styles.statusSelect}
            value={statusFiltro}
            onChange={(e) => setStatusFiltro(e.target.value)}
          >
            <option>Todos os Status</option>
            <option>Livre</option>
            <option>Ocupado</option>
            <option>Reservado</option>
            <option>Manutenção</option>
          </select>

          <button
            type="button"
            className={styles.newRoomButton}
            onClick={novoQuarto}
          >
            + Novo Quarto
          </button>

        </section>

        {/* =========================
            LISTA DE QUARTOS
        ========================= */}

        <section className={styles.roomsSection}>

          {/* ANDAR 1 */}

          {quartosAndar1.length > 0 && (
            <>
              <h2>
                Andar 1 - Bloco Principal
              </h2>

              <div className={styles.roomsGrid}>
                {quartosAndar1.map((quarto) => (
                  <CardQuarto
                    key={quarto.id}
                    quarto={quarto}
                  />
                ))}
              </div>
            </>
          )}

          {/* ANDAR 2 */}

          {quartosAndar2.length > 0 && (
            <>
              <h2 className={styles.secondFloor}>
                Andar 2 - Bloco Principal
              </h2>

              <div className={styles.roomsGrid}>
                {quartosAndar2.map((quarto) => (
                  <CardQuarto
                    key={quarto.id}
                    quarto={quarto}
                  />
                ))}
              </div>
            </>
          )}

          {/* NENHUM RESULTADO */}

          {quartosFiltrados.length === 0 && (
            <div className={styles.empty}>
              Nenhum quarto encontrado.
            </div>
          )}

        </section>

      </main>

    </div>
  );
}