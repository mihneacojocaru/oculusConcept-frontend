import Head from 'next/head';
import styles from '../styles/layout/Layout.module.scss';
function Layout({
  title,
  keywords,
  description,
  children,
  header: Header,
  footer: Footer,
}) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: 'Website Title',
  description: 'Website Description',
  keywords: 'Website Keywords',
};
