import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/PageSections/Portfolio/Portfolio';
import Team from '../components/PageSections/Team/Team';
import SuccesStories from '../components/PageSections/SuccessStories/SuccessStories';
import Kontakt from '../components/PageSections/Kontakt';

export default function Home() {
  return (
    <div>
      <Layout header={Header} footer={Footer}>
        <Hero />
        <Portfolio />
        <Team />
        <SuccesStories />
        <Kontakt />
      </Layout>
    </div>
  );
}
