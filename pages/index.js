import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Aegis</div>
        <nav className={styles.nav}>
          <a href="#">Über uns</a>
          <a href="#">Kontakt</a>
          <button className={styles.loginBtn}>Anmelden</button>
          <button className={styles.dashboardBtn}>Dashboard</button>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.newFeature}>🚀 Neue KI-gestützte Bedrohungserkennung verfügbar</div>
        <h1>
          Schützen Sie Ihr <span className={styles.highlight}>Digitales Reich</span>
        </h1>
        <p>
          Aegis bietet fortschrittliche Cybersicherheitslösungen mit KI-gestützter Bedrohungserkennung, Echtzeit-Monitoring und automatischer Incident Response.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Kostenlos testen →</button>
          <button className={styles.secondaryBtn}>Mehr erfahren</button>
        </div>

        <section className={styles.stats}>
          <div className={styles.statItem}>
            <h2>99.9%</h2>
            <p>Erkennungsrate</p>
          </div>
          <div className={styles.statItem}>
            <h2>&lt; 1s</h2>
            <p>Reaktionszeit</p>
          </div>
          <div className={styles.statItem}>
            <h2>10M+</h2>
            <p>Geschützte Endpunkte</p>
          </div>
          <div className={styles.statItem}>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </section>
      </main>

      <button className={styles.chatBtn}>💬</button>
    </div>
  );
}
