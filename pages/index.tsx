import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Vai filhao</h1>
      <h2>TESTE: {process.env.NEXT_PUBLIC_TEST}</h2>
    </div>
  );
}
