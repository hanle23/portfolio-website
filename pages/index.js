import Head from "next/head";
import Layout, { siteTitle } from "../component/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Place holder</p>
      </section>
    </Layout>
  );
}
