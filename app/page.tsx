import styles from './page.module.css'
import AuthorizationForm from "./modules/Core/components/AuthorizationForm/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <AuthorizationForm/>
    </main>
  )
}
