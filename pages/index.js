import Menu from "../components/menu/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Menu />
      <main className={styles.main}>
        <h1>Home</h1>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
