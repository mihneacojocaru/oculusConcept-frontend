import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Layout header={Header} footer={Footer}>
        <Hero />
      </Layout>
    </div>
  );
}
