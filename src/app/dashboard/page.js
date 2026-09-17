import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={styles.container}>

      <h1 className={styles.title}>
        Dashboard
      </h1>

      <p className={styles.subtitle}>
        Visão geral do hotel
      </p>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h2 className={styles.number}>30</h2>
          <p className={styles.label}>Quartos</p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.number}>12</h2>
          <p className={styles.label}>Reservas</p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.number}>87</h2>
          <p className={styles.label}>Hóspedes</p>
        </div>

      </div>

    </main>
  );
}