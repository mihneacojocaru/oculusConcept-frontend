import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Layout header={Header} footer={Footer}>
        <h1>Hero Text</h1>
      </Layout>
    </div>
  );
}
