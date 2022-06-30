import Head from 'next/head';

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
      <div className="layout">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title:
    'Oculus Concept GmbH - Businesscoach | Strukturgeber für Organisationen',
  description:
    'Strukturgeber für Organisationen und Leadership ✓ Projektmanager ✓ Systemischer Business Coach ✓ Agiler Coach ✓ Oculus Concept GmbH aus Lage ✓ Gunther Kracke ✓',
  keywords:
    'Projektmanager Systemischer Business Coach Agiler Coach Oculus Concept GmbH aus Lage',
};
