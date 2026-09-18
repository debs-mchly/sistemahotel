"use client";

import { useRouter } from "next/navigation";

import styles from "./disponibilidade.module.css";

export default function Disponibilidade() {

  const router = useRouter();

  function selecionarQuarto(quarto, categoria, valor) {

    const dadosQuarto = {
      quarto,
      categoria,
      valor
    };

    sessionStorage.setItem(
      "quartoSelecionado",
      JSON.stringify(dadosQuarto)
    );

    router.push("/financeiro/calcular");
  }


  function novaReserva() {
    router.push("/reservas");
  }


  return (
    <div className={styles.page}>

      {/* CABEÇALHO */}
      <header className={styles.header}>

        <div>

          <div className={styles.breadcrumb}>
            🏠　›　Reservas　›　<strong>Consultar Disponibilidade</strong>
          </div>

          <h1>
            Consulta de Disponibilidade
          </h1>

          <p>
            Verifique o inventário de quartos e realize reservas para períodos futuros.
          </p>

        </div>


        <div className={styles.headerButtons}>

          <button className={styles.calendarButton}>
            📅 Ver Calendário
          </button>

          <button
            className={styles.newButton}
            onClick={novaReserva}
          >
            + Nova Reserva Direta
          </button>

        </div>

      </header>


      {/* PARÂMETROS */}
      <section className={styles.searchCard}>

        <div className={styles.sectionTitle}>

          <div className={styles.icon}>
            🔍
          </div>

          <div>
            <h2>Parâmetros de Busca</h2>

            <p>
              Defina o período e critérios básicos de hospedagem
            </p>
          </div>

        </div>


        <div className={styles.searchFields}>

          <div>
            <label>
              Data de Entrada *
            </label>

            <input
              type="date"
              defaultValue="2024-06-01"
            />
          </div>


          <div>
            <label>
              Data de Saída *
            </label>

            <input
              type="date"
              defaultValue="2024-06-05"
            />
          </div>


          <div>
            <label>
              Tipo de Quarto
            </label>

            <select>
              <option>Todos os tipos</option>
              <option>Standard Single</option>
              <option>Standard Double</option>
              <option>Deluxe Suite</option>
              <option>Master Suite</option>
            </select>
          </div>


          <div>
            <label>
              Capacidade (Pessoas)
            </label>

            <select>
              <option>2 Pessoas</option>
              <option>1 Pessoa</option>
              <option>3 Pessoas</option>
              <option>4 Pessoas</option>
            </select>
          </div>


          <button className={styles.searchButton}>
            🔍 Consultar
          </button>

        </div>

      </section>


      {/* RESUMO */}
      <div className={styles.stats}>

        <div className={styles.statCard}>

          <span>📅</span>

          <div>
            <small>PERÍODO SELECIONADO</small>
            <strong>01 Jun – 05 Jun (4 Noites)</strong>
          </div>

        </div>


        <div className={styles.statCard}>

          <span>🛏️</span>

          <div>
            <small>QUARTOS ENCONTRADOS</small>
            <strong>5 Unidades Disponíveis</strong>
          </div>

        </div>


        <div className={styles.statCard}>

          <span>↕️</span>

          <div>
            <small>ORDENAR RESULTADOS</small>
            <strong>Preço: Menor para Maior</strong>
          </div>

        </div>

      </div>


      {/* LISTA */}
      <section className={styles.roomsCard}>

        <div className={styles.roomsHeader}>
          <strong>
            Lista de Unidades Habitacionais
          </strong>

          <span>
            ⋯
          </span>
        </div>


        {/* CABEÇALHO DA TABELA */}
        <div className={styles.tableHeader}>

          <span>Quarto</span>
          <span>Tipo & Categoria</span>
          <span>Localização</span>
          <span>Capacidade</span>
          <span>Comodidades</span>
          <span>Diária</span>
          <span>Status</span>
          <span></span>

        </div>


        {/* QUARTO 101 */}
        <div className={styles.roomRow}>

          <strong className={styles.roomNumber}>
            #101
          </strong>

          <div>
            <strong>Standard Single</strong>
            <small>CATEGORIA PREMIUM</small>
          </div>

          <span>
            1º Andar
          </span>

          <span>
            👥 1 pax
          </span>

          <span>
            Wi-Fi · TV · Ar
          </span>

          <strong className={styles.price}>
            R$ 180,00
          </strong>

          <span className={styles.available}>
            ● Disponível
          </span>

          <button
            className={styles.selectButton}
            onClick={() =>
              selecionarQuarto(
                "101",
                "Standard Single",
                180
              )
            }
          >
            Selecionar
          </button>

        </div>


        {/* QUARTO 204 */}
        <div className={styles.roomRow}>

          <strong className={styles.roomNumber}>
            #204
          </strong>

          <div>
            <strong>Double Deluxe</strong>
            <small>CATEGORIA PREMIUM</small>
          </div>

          <span>
            2º Andar
          </span>

          <span>
            👥 2 pax
          </span>

          <span>
            Wi-Fi · TV · Frigobar
          </span>

          <strong className={styles.price}>
            R$ 350,00
          </strong>

          <span className={styles.available}>
            ● Disponível
          </span>

          <button
            className={styles.selectButton}
            onClick={() =>
              selecionarQuarto(
                "204",
                "Double Deluxe",
                350
              )
            }
          >
            Selecionar
          </button>

        </div>


        {/* QUARTO 305 */}
        <div className={styles.roomRow}>

          <strong className={styles.roomNumber}>
            #305
          </strong>

          <div>
            <strong>Family Suite</strong>
            <small>CATEGORIA PREMIUM</small>
          </div>

          <span>
            3º Andar
          </span>

          <span>
            👥 4 pax
          </span>

          <span>
            Wi-Fi · TV · Frigobar
          </span>

          <strong className={styles.price}>
            R$ 580,00
          </strong>

          <span className={styles.available}>
            ● Disponível
          </span>

          <button
            className={styles.selectButton}
            onClick={() =>
              selecionarQuarto(
                "305",
                "Family Suite",
                580
              )
            }
          >
            Selecionar
          </button>

        </div>


        {/* QUARTO 402 */}
        <div className={styles.roomRow}>

          <strong className={styles.roomNumber}>
            #402
          </strong>

          <div>
            <strong>Master Suite</strong>
            <small>CATEGORIA PREMIUM</small>
          </div>

          <span>
            4º Andar
          </span>

          <span>
            👥 2 pax
          </span>

          <span>
            Wi-Fi · TV · Banheira
          </span>

          <strong className={styles.price}>
            R$ 1.200,00
          </strong>

          <span className={styles.available}>
            ● Disponível
          </span>

          <button
            className={styles.selectButton}
            onClick={() =>
              selecionarQuarto(
                "402",
                "Master Suite",
                1200
              )
            }
          >
            Selecionar
          </button>

        </div>


        {/* QUARTO 105 */}
        <div className={styles.roomRow}>

          <strong className={styles.roomNumber}>
            #105
          </strong>

          <div>
            <strong>Double Deluxe</strong>
            <small>CATEGORIA PREMIUM</small>
          </div>

          <span>
            1º Andar
          </span>

          <span>
            👥 2 pax
          </span>

          <span>
            Wi-Fi · TV · Ar
          </span>

          <strong className={styles.price}>
            R$ 350,00
          </strong>

          <span className={styles.available}>
            ● Disponível
          </span>

          <button
            className={styles.selectButton}
            onClick={() =>
              selecionarQuarto(
                "105",
                "Double Deluxe",
                350
              )
            }
          >
            Selecionar
          </button>

        </div>

      </section>


      {/* RODAPÉ */}
      <footer className={styles.footer}>
        HotelPro Admin v4.2.0 • Central de Disponibilidade Real-Time • Grand Plaza Hotel
      </footer>

    </div>
  );
}