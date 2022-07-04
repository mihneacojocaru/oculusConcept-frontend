import { useEffect, useState } from 'react';
import { useStateContext } from '../../context/StateContext';

export default function SectionSelector() {
  const [currentSection, setCurrentSection] = useState('general');

  const { currentMode, setCurrentMode } = useStateContext();

  const text0 = {
    title: 'Initial Text',
    paragraph1: 'This is the first paragraph.',
    paragraph2: 'This is the second paragraph.',
    paragraph3: 'This is the third paragraph.',
    paragraph4: 'This is the fourth paragraph.',
  };

  const text1 = {
    title: 'Section I',
    paragraph1:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aliquid?',
    paragraph2: 'Sit ex veritatis natus repudiandae, asarha bahusdam tempora.',
    paragraph3:
      'Veniam a voluptatum accusantium voluptatibus nostrum dolorem minima.',
    paragraph4:
      'Tenetur dignissimos vel enim at nemo culpa abataha consectetur!',
  };

  const text2 = {
    title: 'Section D',
    paragraph1:
      'Pellentesque dignissim enim sit amet venenatis urna cursus eget. ',
    paragraph2:
      'In nisl nisi scelerisque eu ultrices. Tempor commodo ullamcorper. ',
    paragraph3:
      'Vulputate ut pharetra sit amet aliquam. Sed euismod nisi porta lorem mollis.',
    paragraph4:
      'Vitae et leo duis ut diam. A erat nam at lectus urna duis tembrena.',
  };

  const text3 = {
    title: 'Section G',
    paragraph1:
      'Pellentesque dignissim enim sit amet venenatis urna cursus eget.',
    paragraph2:
      'In nisl nisi scelerisque eu ultrices. Tempor commodo ullamcorper. ',
    paragraph3:
      'Vulputate ut pharetra sit amet aliquam. Sed euismod porta lorem.',
    paragraph4:
      'Vitae et leo duis ut diam. A erat nam at lectus urna duis areta.',
  };

  const text4 = {
    title: 'Section S',
    paragraph1:
      'In nisl nisi scelerisque eu ultrices. Tempor commodo ullamcorper.',
    paragraph2:
      'Pellentesque dignissim enim sit amet venenatis urna cursus eget.',
    paragraph3:
      'A erat nam at lectus urna duis areta. Sed euismod porta lorem.',
    paragraph4:
      'Vitae et leo duis ut diam. Vulputate ut pharetra sit amet aliquam. ',
  };

  const btnClickHandler = (e) => {
    if (e.target.id === 'btnI') {
      setCurrentSection('sectionI');
    } else if (e.target.id === 'btnS') {
      setCurrentSection('sectionS');
    } else if (e.target.id === 'btnG') {
      setCurrentSection('sectionG');
    } else if (e.target.id === 'btnD') {
      setCurrentSection('sectionD');
    }
  };

  const [currentText, setCurrentText] = useState(text0);

  useEffect(() => {
    if (currentSection === 'sectionI') {
      setCurrentText(text1);
    } else if (currentSection === 'sectionD') {
      setCurrentText(text2);
    } else if (currentSection === 'sectionG') {
      setCurrentText(text3);
    } else if (currentSection === 'sectionS') {
      setCurrentText(text4);
    }
  }, [currentSection]);

  return (
    <div className="sectionSelector container">
      <h1 className="sectionSelector__title">
        Section Selector{' '}
        <button
          onClick={() => {
            setCurrentText(text0);
            setCurrentSection('general');
          }}
        >
          Reset Section
        </button>
      </h1>
      <section className="sections">
        <div className="leftSection">
          <div className="paragraphs">
            <h3>{currentText.title}</h3>
            <div className="paragraphs__paragraph">
              <p>{currentText.paragraph1}</p>
            </div>
            <div className="paragraphs__paragraph">
              <p>{currentText.paragraph2}</p>
            </div>
            <div className="paragraphs__paragraph">
              <p>{currentText.paragraph3}</p>
            </div>
            <div className="paragraphs__paragraph">
              <p>{currentText.paragraph4}</p>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="wrapper">
            <div
              id="btnD"
              className="quarter left-top"
              onClick={btnClickHandler}
            >
              <span>D</span>
            </div>
            <div
              id="btnI"
              className="quarter right-top"
              onClick={btnClickHandler}
            >
              <span>I</span>
            </div>
            <div
              id="btnG"
              className="quarter left-bottom"
              onClick={btnClickHandler}
            >
              <span>G</span>
            </div>
            <div
              id="btnS"
              className="quarter right-bottom"
              onClick={btnClickHandler}
            >
              <span>S</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
