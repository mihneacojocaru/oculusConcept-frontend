import QuestionSelector from './TestComponents/QuestionSelector';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__gridContainer container">
        <div className="hero__gridContainer--mainSection">
          <h1>Oculus Concept</h1>
          <span></span>
          <p>
            In Allem was wir tun, glauben wir daran, dass jeder Mensch zu
            eigenverantwortlichen Handeln befähigt werden kann. Wir glauben
            daran positiv zu verändern.
          </p>
        </div>
        <QuestionSelector />
      </div>
    </section>
  );
}
