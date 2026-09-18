"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./reservas.module.css";

export default function NovaReserva() {
  const router = useRouter();

  const [hospede, setHospede] = useState(null);

  useEffect(() => {
    const dados = sessionStorage.getItem("hospedeCadastro");

    if (dados) {
       // eslint-disable-next-line react-hooks/set-state-in-effect
      setHospede(JSON.parse(dados));
    }
  }, []);

  function irParaDisponibilidade() {
    router.push("/disponibilidade");
  }

  function cadastrarHospede() {
    router.push("/hospedes");
  }

  return (
    <div className={styles.page}>

      {/* TOPO */}
      <header className={styles.topbar}>

        <div className={styles.hotel}>
          🏨 <strong>Hotel Grand Plaza</strong>
        </div>

        <div className={styles.search}>
          🔍 Buscar hóspedes, quartos...
        </div>

        <div className={styles.user}>
          🔔

          <div>
            <strong>Carlos Mendes</strong>
            <span>Gerente de Turno</span>
          </div>

          👤
        </div>

      </header>


      {/* CABEÇALHO */}
      <section className={styles.pageHeader}>

        <div className={styles.breadcrumb}>
          🏠　›　Reservas　›　<strong>Nova Reserva</strong>
        </div>

        <h1>Realizar Nova Reserva</h1>

        <p>
          Configure os detalhes da hospedagem e finalize o checkout administrativo.
        </p>

      </section>


      {/* CONTEÚDO */}
      <div className={styles.content}>

        <div className={styles.leftColumn}>

          {/* HÓSPEDE */}
          <section className={styles.card}>

            <div className={styles.sectionTitle}>

              <div className={styles.icon}>
                👤
              </div>

              <div>
                <h2>Dados do Hóspede</h2>

                <p>
                  Identifique o cliente ou realize um cadastro rápido.
                </p>
              </div>

            </div>


            <div className={styles.guestSearch}>

              {hospede ? (

                <div className={styles.guestSelected}>

                  <div>

                    <strong>
                      {hospede.nome}
                    </strong>

                    <span>
                      CPF: {hospede.cpf} • {hospede.email}
                    </span>

                    <small>
                      Telefone: {hospede.telefone}
                    </small>

                  </div>

                  <button
                    type="button"
                    onClick={cadastrarHospede}
                  >
                    Alterar
                  </button>

                </div>

              ) : (

                <>
                  <input
                    type="text"
                    placeholder="Buscar por nome, CPF ou e-mail..."
                  />

                  <button
                    type="button"
                    className={styles.registerButton}
                    onClick={cadastrarHospede}
                  >
                    ＋ Cadastrar Novo
                  </button>
                </>

              )}

            </div>

          </section>


          {/* PERÍODO */}
          <section className={styles.card}>

            <div className={styles.sectionTitle}>

              <div className={styles.icon}>
                📅
              </div>

              <div>
                <h2>Período e Ocupação</h2>

                <p>
                  Defina as datas da estadia e o número de hóspedes.
                </p>
              </div>

            </div>


            <div className={styles.fields}>

              <div>

                <label className={styles.fieldLabel}>
                  Check-in *
                </label>

                <input type="date" />

              </div>


              <div>

                <label className={styles.fieldLabel}>
                  Check-out *
                </label>

                <input type="date" />

              </div>


              <div>

                <label className={styles.fieldLabel}>
                  Adultos
                </label>

                <select>

                  <option>1 Adulto</option>
                  <option>2 Adultos</option>
                  <option>3 Adultos</option>
                  <option>4 Adultos</option>

                </select>

              </div>


              <div>

                <label className={styles.fieldLabel}>
                  Crianças
                </label>

                <select>

                  <option>Nenhuma</option>
                  <option>1 Criança</option>
                  <option>2 Crianças</option>
                  <option>3 Crianças</option>

                </select>

              </div>

            </div>

          </section>


          {/* CATEGORIA */}
          <section className={styles.card}>

            <div className={styles.sectionTitle}>

              <div className={styles.icon}>
                🛏️
              </div>

              <div>
                <h2>Seleção de Categoria</h2>

                <p>
                  Escolha o tipo de acomodação baseado na disponibilidade.
                </p>
              </div>

            </div>


            <div className={styles.rooms}>


              {/* STANDARD SINGLE */}
              <button
                type="button"
                className={styles.roomCard}
                onClick={irParaDisponibilidade}
              >

                <div className={styles.roomImage}>
                  🛏️
                </div>

                <div className={styles.roomInfo}>

                  <div className={styles.roomTop}>

                    <strong>
                      Standard Single
                    </strong>

                    <span>
                      R$ 180
                    </span>

                  </div>

                  <p>
                    Quarto compacto com cama de solteiro e mesa de trabalho.
                  </p>

                  <small>
                    5 DISPONÍVEIS
                  </small>

                </div>

              </button>


              {/* STANDARD DOUBLE */}
              <button
                type="button"
                className={styles.roomCard}
                onClick={irParaDisponibilidade}
              >

                <div className={styles.roomImage}>
                  🛏️
                </div>

                <div className={styles.roomInfo}>

                  <div className={styles.roomTop}>

                    <strong>
                      Standard Double
                    </strong>

                    <span>
                      R$ 250
                    </span>

                  </div>

                  <p>
                    Quarto confortável com cama de casal ou duas de solteiro.
                  </p>

                  <small>
                    8 DISPONÍVEIS
                  </small>

                </div>

              </button>


              {/* DELUXE SUITE */}
              <button
                type="button"
                className={styles.roomCard}
                onClick={irParaDisponibilidade}
              >

                <div className={styles.roomImage}>
                  🛏️
                </div>

                <div className={styles.roomInfo}>

                  <div className={styles.roomTop}>

                    <strong>
                      Deluxe Suite
                    </strong>

                    <span>
                      R$ 450
                    </span>

                  </div>

                  <p>
                    Suíte espaçosa e confortável, com frigobar e banheira.
                  </p>

                  <small>
                    3 DISPONÍVEIS
                  </small>

                </div>

              </button>


              {/* MASTER */}
              <button
                type="button"
                className={styles.roomCard}
                onClick={irParaDisponibilidade}
              >

                <div className={styles.roomImage}>
                  🛏️
                </div>

                <div className={styles.roomInfo}>

                  <div className={styles.roomTop}>

                    <strong>
                      Master Presidential
                    </strong>

                    <span>
                      R$ 1200
                    </span>

                  </div>

                  <p>
                    A melhor experiência do hotel, com vista panorâmica.
                  </p>

                  <small>
                    1 DISPONÍVEL
                  </small>

                </div>

              </button>

            </div>

          </section>


          {/* OBSERVAÇÕES */}
          <section className={styles.card}>

            <div className={styles.sectionTitle}>

              <div className={styles.icon}>
                📄
              </div>

              <div>
                <h2>Observações e Notas</h2>

                <p>
                  Informações adicionais relevantes para a estadia.
                </p>
              </div>

            </div>

            <textarea
              placeholder="Ex: Hóspede alérgico a glúten, solicita cama extra ou check-in tardio..."
            />

          </section>

        </div>

      </div>

    </div>
  );
}