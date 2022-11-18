import Head from 'next/head'
import ThreeIcon from '../components/ThreeIcon'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <ThreeIcon />
      </main>
    </div>
  )
}
