"use client";

import { useRouter } from "next/navigation";
import styles from "./hospedes.module.css";

export default function Hospedes() {
  const router = useRouter();

  const hospedes = [
    {
      nome: "joao",
      cpf: "341.984.561-50",
      telefone: "3611986021",
      email: "joao@email.com",
    },
  ];

  return (
    <div className={styles.page}>

      {/* BARRA SUPERIOR */}
      <header className={styles.topbar}>

        <div className={styles.hotel}>
          <span className={styles.hotelIcon}>▣</span>
          <strong>Hotel Grand Plaza</strong>
          <span className={styles.topDivider}>/ Central de Reservas</span>
        </div>

        <div className={styles.userArea}>
          <span className={styles.notification}>♧</span>

          <div className={styles.userInfo}>
            <strong>Carlos Mendes</strong>
          </div>

          <div className={styles.userAvatar}>
            ◯
          </div>

          <span className={styles.arrow}>⌄</span>
        </div>

      </header>


      {/* CABEÇALHO */}
      <section className={styles.hero}>

        <div className={styles.breadcrumb}>
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

            {/* BOTÃO NOVO CADASTRO */}
            <button
              type="button"
              className={styles.newButton}
              onClick={() => router.push("/hospedes/novo")}
            >
              <span>＋</span>
              Novo Cadastro
            </button>

          </div>


          {/* BUSCA */}
          <div className={styles.searchArea}>

            <div className={styles.searchInput}>

              <span>⌕</span>

              <input
                type="text"
                placeholder="Buscar por nome, CPF ou e-mail..."
              />

            </div>

          </div>


          {/* LISTA */}
          <div className={styles.guestList}>

            {hospedes.map((hospede, index) => (

              <div
                className={styles.guestRow}
                key={index}
              >

                <div className={styles.guestAvatar}>
                  ♙
                </div>

                <strong className={styles.guestName}>
                  {hospede.nome}
                </strong>

                <div className={styles.guestInfo}>
                  <span>
                    <strong>CPF:</strong> {hospede.cpf}
                  </span>

                  <span>
                    <strong>Telefone:</strong> {hospede.telefone}
                  </span>

                  <span>
                    <strong>E-mail:</strong> {hospede.email}
                  </span>
                </div>

                <button
                  type="button"
                  className={styles.viewButton}
                >
                  ◉
                </button>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}