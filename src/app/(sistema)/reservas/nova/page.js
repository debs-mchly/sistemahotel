"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./nova.module.css";

export default function NovaReserva() {
  const router = useRouter();

  const [reserva] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const dados = sessionStorage.getItem("reservaSelecionada");

    return dados ? JSON.parse(dados) : null;
  });

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function continuar() {
    if (!nome || !cpf || !email || !telefone) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const dadosHospede = {
      nome,
      cpf,
      email,
      telefone,
    };

    sessionStorage.setItem(
      "hospedeReserva",
      JSON.stringify(dadosHospede)
    );

    router.push("/reservas/nova/periodo");
  }

  return (
    <div className={styles.page}>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>

        <div className={styles.logo}>
          <div className={styles.logoIcon}>▦</div>

          <div>
            <strong>Grand Plaza</strong>
            <span>CENTRAL DE RESERVAS</span>
          </div>
        </div>

        <nav className={styles.menu}>

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
          >
            <span>▦</span>
            Dashboard
          </button>

          <button
            type="button"
            className={styles.active}
            onClick={() => router.push("/reservas")}
          >
            <span>▣</span>
            Reservas
          </button>

          <button
            type="button"
            onClick={() => router.push("/hospedes")}
          >
            <span>♙</span>
            Hóspedes
          </button>

          <button
            type="button"
            onClick={() => router.push("/quartos")}
          >
            <span>▱</span>
            Quartos
          </button>

          <button
            type="button"
            onClick={() => router.push("/financeiro")}
          >
            <span>▤</span>
            Financeiro
          </button>

          <button
            type="button"
            onClick={() => router.push("/relatorios")}
          >
            <span>⌁</span>
            Relatórios
          </button>

        </nav>

        <div className={styles.sidebarBottom}>

          <button type="button">
            ⚙
            <span>Configurações</span>
          </button>

          <button type="button">
            ⓘ
            <span>Suporte</span>
          </button>

        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className={styles.main}>

        {/* TOPO */}
        <header className={styles.topbar}>

          <div className={styles.topHotel}>
            Hotel Grand Plaza /
            <span>Central de Reservas</span>
          </div>

          <div className={styles.admin}>
            <span>Admin Panel</span>
            <div className={styles.adminAvatar}>A</div>
          </div>

        </header>

        {/* CABEÇALHO */}
        <section className={styles.header}>

          <div className={styles.breadcrumb}>
            Reservas
            <span>›</span>
            Nova Reserva
          </div>

          <h1>Realizar Nova Reserva</h1>

          <p>
            Configure os detalhes da hospedagem e associe um hóspede à reserva.
          </p>

        </section>

        {/* ETAPAS */}
        <section className={styles.steps}>

          <div className={`${styles.step} ${styles.stepActive}`}>
            <span>1</span>
            <strong>Dados do Hóspede</strong>
          </div>

          <div className={styles.line}></div>

          <div className={styles.step}>
            <span>2</span>
            <strong>Período & Quarto</strong>
          </div>

          <div className={styles.line}></div>

          <div className={styles.step}>
            <span>3</span>
            <strong>Revisão & Confirmar</strong>
          </div>

        </section>

        {/* CARD */}
        <section className={styles.card}>

          <div className={styles.cardTitle}>

            <div className={styles.titleIcon}>
              ♙
            </div>

            <div>
              <h2>Dados do Hóspede</h2>

              <p>
                — Identifique o cliente ou realize um cadastro rápido
              </p>
            </div>

          </div>

          {/* BUSCA */}
          <div className={styles.searchField}>

            <label>
              Buscar por Nome, CPF ou E-mail
            </label>

            <div className={styles.searchInput}>
              <span>⌕</span>

              <input
                type="text"
                placeholder="Buscar por nome, CPF ou e-mail..."
              />
            </div>

          </div>

          {/* CAMPOS */}
          <div className={styles.formGrid}>

            <div className={styles.field}>

              <label>
                Nome Completo <span>*</span>
              </label>

              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="ex. Amanda Silveira"
              />

            </div>

            <div className={styles.field}>

              <label>
                CPF <span>*</span>
              </label>

              <input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="000.000.000-00"
              />

            </div>

            <div className={styles.field}>

              <label>
                E-mail <span>*</span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex. amanda@email.com"
              />

            </div>

            <div className={styles.field}>

              <label>
                Telefone / Celular <span>*</span>
              </label>

              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(11) 99999-0000"
              />

            </div>

          </div>

        </section>

        {/* QUARTO SELECIONADO */}
        {reserva && (
          <section className={styles.roomSelected}>

            <div>
              <small>QUARTO SELECIONADO</small>

              <strong>{reserva.nome}</strong>

              <span>
                {reserva.tipo} • {reserva.capacidade}
              </span>
            </div>

            <div className={styles.roomPrice}>
              <small>DIÁRIA</small>
              <strong>{reserva.diaria}</strong>
            </div>

          </section>
        )}

        {/* AÇÕES */}
        <div className={styles.actions}>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => router.push("/reservas")}
          >
            Voltar para Disponibilidade
          </button>

          <button
            type="button"
            className={styles.nextButton}
            onClick={continuar}
          >
            Avançar para Período e Quarto
          </button>

        </div>

      </main>
    </div>
  );
}