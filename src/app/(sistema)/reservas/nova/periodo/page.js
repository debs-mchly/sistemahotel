"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./periodo.module.css";

export default function PeriodoReserva() {
  const router = useRouter();

  const [reserva] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const dados = sessionStorage.getItem("reservaSelecionada");
      return dados ? JSON.parse(dados) : null;
    } catch {
      return null;
    }
  });

  const [hospede] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const dados = sessionStorage.getItem("hospedeReserva");
      return dados ? JSON.parse(dados) : null;
    } catch {
      return null;
    }
  });

  const [dataEntrada, setDataEntrada] = useState("");
  const [dataSaida, setDataSaida] = useState("");
  const [observacoes, setObservacoes] = useState("");

  function continuar() {
    if (!dataEntrada || !dataSaida) {
      alert("Informe a data de entrada e a data de saída.");
      return;
    }

    if (dataSaida <= dataEntrada) {
      alert("A data de saída deve ser posterior à data de entrada.");
      return;
    }

    const dadosReserva = {
      quarto: reserva,
      hospede: hospede,
      dataEntrada,
      dataSaida,
      observacoes,
    };

    sessionStorage.setItem(
      "dadosReserva",
      JSON.stringify(dadosReserva)
    );

    router.push("/reservas/sucesso");
  }

  return (
    <div className={styles.page}>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className={styles.sidebar}>

        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            ▦
          </div>

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

      {/* =====================================================
          CONTEÚDO
      ===================================================== */}

      <main className={styles.main}>

        {/* TOPBAR */}

        <header className={styles.topbar}>

          <div className={styles.topHotel}>
            Hotel Grand Plaza /
            <span> Central de Reservas</span>
          </div>

          <div className={styles.admin}>
            <span>Admin Panel</span>

            <div className={styles.adminAvatar}>
              A
            </div>
          </div>

        </header>

        {/* =====================================================
            CABEÇALHO
        ===================================================== */}

        <section className={styles.header}>

          <div className={styles.breadcrumb}>
            Reservas
            <span>›</span>
            Nova Reserva
            <span>›</span>
            Período &amp; Quarto
          </div>

          <h1>
            Período e Quarto
          </h1>

          <p>
            Configure as datas da hospedagem e confirme o quarto selecionado.
          </p>

        </section>

        {/* =====================================================
            ETAPAS
        ===================================================== */}

        <section className={styles.steps}>

          {/* ETAPA 1 */}

          <button
            type="button"
            className={styles.step}
            onClick={() => router.push("/reservas/nova")}
          >
            <span className={styles.completed}>
              ✓
            </span>

            <strong>
              Dados do Hóspede
            </strong>
          </button>

          <div className={styles.line} />

          {/* ETAPA 2 */}

          <div
            className={`${styles.step} ${styles.stepActive}`}
          >
            <span>
              2
            </span>

            <strong>
              Período &amp; Quarto
            </strong>
          </div>

          <div className={styles.line} />

          {/* ETAPA 3 */}

          <div className={styles.step}>
            <span>
              3
            </span>

            <strong>
              Revisão &amp; Confirmar
            </strong>
          </div>

        </section>

        {/* =====================================================
            HÓSPEDE
        ===================================================== */}

        <section className={styles.card}>

          <div className={styles.cardTitle}>

            <div className={styles.titleIcon}>
              ♙
            </div>

            <div>
              <h2>
                Dados do Hóspede
              </h2>

              <p>
                — Cliente associado à reserva
              </p>
            </div>

          </div>

          <div className={styles.guestInfo}>

            <div>
              <small>NOME</small>

              <strong>
                {hospede?.nome || "Hóspede não informado"}
              </strong>
            </div>

            <div>
              <small>CPF</small>

              <strong>
                {hospede?.cpf || "-"}
              </strong>
            </div>

            <div>
              <small>E-MAIL</small>

              <strong>
                {hospede?.email || "-"}
              </strong>
            </div>

            <div>
              <small>TELEFONE</small>

              <strong>
                {hospede?.telefone || "-"}
              </strong>
            </div>

          </div>

        </section>

        {/* =====================================================
            PERÍODO
        ===================================================== */}

        <section className={styles.card}>

          <div className={styles.cardTitle}>

            <div className={styles.titleIcon}>
              📅
            </div>

            <div>
              <h2>
                Período da Hospedagem
              </h2>

              <p>
                — Informe as datas de entrada e saída
              </p>
            </div>

          </div>

          <div className={styles.formGrid}>

            <div className={styles.field}>

              <label>
                Data de Entrada <span>*</span>
              </label>

              <input
                type="date"
                value={dataEntrada}
                onChange={(e) =>
                  setDataEntrada(e.target.value)
                }
              />

            </div>

            <div className={styles.field}>

              <label>
                Data de Saída <span>*</span>
              </label>

              <input
                type="date"
                value={dataSaida}
                onChange={(e) =>
                  setDataSaida(e.target.value)
                }
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            QUARTO
        ===================================================== */}

        <section className={styles.card}>

          <div className={styles.cardTitle}>

            <div className={styles.titleIcon}>
              🛏
            </div>

            <div>
              <h2>
                Quarto Selecionado
              </h2>

              <p>
                — Unidade escolhida na disponibilidade
              </p>
            </div>

          </div>

          {reserva ? (

            <div className={styles.room}>

              <div className={styles.roomIcon}>
                🛏
              </div>

              <div className={styles.roomMain}>

                <strong>
                  {reserva.nome || "Quarto selecionado"}
                </strong>

                <span>
                  {reserva.tipo || "Tipo de quarto"}
                </span>

              </div>

              <div className={styles.roomDetails}>

                <small>
                  LOCALIZAÇÃO
                </small>

                <strong>
                  {reserva.localizacao || "-"}
                </strong>

              </div>

              <div className={styles.roomDetails}>

                <small>
                  CAPACIDADE
                </small>

                <strong>
                  {reserva.capacidade || "-"}
                </strong>

              </div>

              <div className={styles.roomPrice}>

                <small>
                  DIÁRIA
                </small>

                <strong>
                  {reserva.diaria || "-"}
                </strong>

              </div>

            </div>

          ) : (

            <div className={styles.noRoom}>
              Nenhum quarto selecionado.
            </div>

          )}

        </section>

        {/* =====================================================
            OBSERVAÇÕES
        ===================================================== */}

        <section className={styles.card}>

          <div className={styles.cardTitle}>

            <div className={styles.titleIcon}>
              📄
            </div>

            <div>
              <h2>
                Observações
              </h2>

              <p>
                — Informações adicionais da reserva
              </p>
            </div>

          </div>

          <div className={styles.field}>

            <label>
              Observações
            </label>

            <textarea
              value={observacoes}
              onChange={(e) =>
                setObservacoes(e.target.value)
              }
              placeholder="Digite alguma observação sobre a hospedagem..."
            />

          </div>

        </section>

        {/* =====================================================
            BOTÕES
        ===================================================== */}

        <div className={styles.actions}>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => router.push("/reservas/nova")}
          >
            ← Voltar para Dados do Hóspede
          </button>

          <button
            type="button"
            className={styles.nextButton}
            onClick={continuar}
          >
            Avançar para Revisão e Confirmar →
          </button>

        </div>

      </main>

    </div>
  );
}