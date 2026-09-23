"use client";

import { useRouter } from "next/navigation";
import styles from "./novo.module.css";

export default function CadastroHospede() {
  const router = useRouter();

  const salvarCadastro = (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const novoHospede = {
      id: Date.now(),
      nome,
      cpf,
      email,
      telefone,
    };

    const hospedesSalvos =
      JSON.parse(sessionStorage.getItem("hospedes")) || [];

    hospedesSalvos.push(novoHospede);

    sessionStorage.setItem(
      "hospedes",
      JSON.stringify(hospedesSalvos)
    );

    alert("Cadastro salvo com sucesso!");

    router.push("/hospedes");
  };

  return (
    <div className={styles.page}>

      {/* =========================
          BARRA SUPERIOR
      ========================= */}
      <header className={styles.topbar}>
        <div className={styles.hotel}>
          <span className={styles.hotelIcon}>🏨</span>

          <strong>Hotel Grand Plaza</strong>

          <span className={styles.topDivider}>
            / Central de Reservas
          </span>
        </div>

        <div className={styles.topbarRight}>

          <div className={styles.userInfo}>
            <strong>Painel do Administrador</strong>
          </div>

          <div className={styles.userAvatar}>
            👤
          </div>
        </div>
      </header>

      {/* =========================
          CABEÇALHO
      ========================= */}
      <section className={styles.hero}>

        <div className={styles.breadcrumb}>
          <span>🏠</span>
          <span>›</span>
          <span>Reservas</span>
          <span>›</span>
          <span>Novo Cadastro</span>
          <span>›</span>
          <strong>Hóspedes</strong>
        </div>

        <h1>Novo Cadastro de Hóspede</h1>

        <p>
          Preencha as informações detalhadas para o check-in do novo cliente.
        </p>

      </section>

      {/* =========================
          FORMULÁRIO
      ========================= */}
      <form onSubmit={salvarCadastro}>

        <main className={styles.content}>

          {/* =========================
              DADOS PESSOAIS
          ========================= */}
          <section className={styles.card}>

            <div className={styles.cardHeader}>

              <div className={styles.sectionIcon}>
                👤
              </div>

              <div className={styles.sectionTitle}>
                <h2>Dados Pessoais</h2>

                <p>
                  Informações de identificação básica do hóspede
                </p>
              </div>

            </div>

            <div className={styles.formContent}>

              <div className={`${styles.field} ${styles.fieldName}`}>
                <label>
                  Nome Completo <span>*</span>
                </label>

                <input
                  id="nome"
                  type="text"
                  placeholder="Ex: João Silva de Oliveira"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>
                  CPF <span>*</span>
                </label>

                <input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Data de Nascimento</label>

                <input
                  type="date"
                />
              </div>

              <div className={styles.field}>
                <label>Gênero</label>

                <select defaultValue="Prefiro não informar">
                  <option>Prefiro não informar</option>
                  <option>Feminino</option>
                  <option>Masculino</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Nacionalidade</label>

                <input
                  type="text"
                  defaultValue="Brasileira"
                />
              </div>

              <div className={styles.field}>
                <label>
                  E-mail <span>*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="cliente@email.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>
                  Telefone <span>*</span>
                </label>

                <input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>
                  Documento de Identificação
                  <small>(RG/Passaporte)</small>
                </label>

                <input
                  type="text"
                  placeholder="Número do documento"
                />
              </div>

            </div>
          </section>

          {/* =========================
              ENDEREÇO
          ========================= */}
          <section className={styles.card}>

            <div className={styles.cardHeader}>

              <div className={styles.sectionIcon}>
                📍
              </div>

              <div className={styles.sectionTitle}>
                <h2>Endereço</h2>

                <p>
                  Localização da residência do hóspede
                </p>
              </div>

            </div>

            <div className={styles.formContent}>

              <div className={styles.field}>
                <label>CEP</label>

                <div className={styles.cepGroup}>

                  <input
                    type="text"
                    placeholder="00000-000"
                  />

                  <button
                    type="button"
                    className={styles.cepButton}
                  >
                    🔍
                  </button>

                </div>
              </div>

              <div className={`${styles.field} ${styles.streetField}`}>
                <label>Rua/Avenida</label>

                <input
                  type="text"
                  placeholder="Logradouro"
                />
              </div>

              <div className={styles.field}>
                <label>Número</label>

                <input
                  type="text"
                  placeholder="123"
                />
              </div>

              <div className={styles.field}>
                <label>Complemento</label>

                <input
                  type="text"
                  placeholder="Apto, Bloco, etc."
                />
              </div>

              <div className={styles.field}>
                <label>Bairro</label>

                <input
                  type="text"
                  placeholder="Nome do bairro"
                />
              </div>

              <div className={styles.field}>
                <label>Cidade</label>

                <input
                  type="text"
                  placeholder="Cidade"
                />
              </div>

              <div className={styles.field}>
                <label>Estado</label>

                <select defaultValue="UF">
                  <option value="UF">UF</option>
                  <option>AC</option>
                  <option>AL</option>
                  <option>AP</option>
                  <option>AM</option>
                  <option>BA</option>
                  <option>CE</option>
                  <option>DF</option>
                  <option>ES</option>
                  <option>GO</option>
                  <option>MA</option>
                  <option>MT</option>
                  <option>MS</option>
                  <option>MG</option>
                  <option>PA</option>
                  <option>PB</option>
                  <option>PR</option>
                  <option>PE</option>
                  <option>PI</option>
                  <option>RJ</option>
                  <option>RN</option>
                  <option>RS</option>
                  <option>RO</option>
                  <option>RR</option>
                  <option>SC</option>
                  <option>SP</option>
                  <option>SE</option>
                  <option>TO</option>
                </select>
              </div>

            </div>
          </section>

          {/* =========================
              OBSERVAÇÕES
          ========================= */}
          <section className={styles.card}>

            <div className={styles.cardHeader}>

              <div className={styles.sectionIcon}>
                📄
              </div>

              <div className={styles.sectionTitle}>
                <h2>Observações</h2>

                <p>
                  Notas internas, preferências ou restrições alimentares
                </p>
              </div>

            </div>

            <div className={styles.observationContent}>

              <label>
                Notas Adicionais
              </label>

              <textarea
                placeholder="Insira aqui informações relevantes como alergias, preferências de quarto ou histórico do cliente..."
              />

            </div>

          </section>

          {/* =========================
              BOTÕES
          ========================= */}
          <div className={styles.actions}>

            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => router.push("/hospedes")}
            >
              Cancelar
            </button>

            <button
              type="reset"
              className={styles.clearButton}
            >
              Limpar formulário
            </button>

            <button
              type="submit"
              className={styles.saveButton}
            >
              Salvar cadastro
            </button>

          </div>

        </main>

      </form>

      {/* =========================
          RODAPÉ
      ========================= */}
      <footer className={styles.footer}>
        HotelPro Admin v4.2.0 • Sistema de Gestão Hoteleira Profissional
      </footer>

    </div>
  );
}