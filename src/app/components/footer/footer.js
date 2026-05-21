import Image from "next/image";
import styles from "./footer.module.css";

export function Header() {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>
      <div>
        <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
      </div>
    </div>
  );
}