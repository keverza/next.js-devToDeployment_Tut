import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <Layout title="page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, theris nothing here</h4>
        <Link href="/">Go back Home</Link>
      </div>
    </Layout>
  );
}