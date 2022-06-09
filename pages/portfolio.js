import Head from "next/head";
import Layout, { siteTitle } from "../component/layout";
import utilStyles from "../styles/utils.module.css";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Portfolio placeholder</p>
      </section>
    </Layout>
  );
}
