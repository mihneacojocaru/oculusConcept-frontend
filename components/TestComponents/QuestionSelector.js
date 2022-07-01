import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/StateContext';
export default function QuestionSelector() {
  const { currentMode, setCurrentMode } = useStateContext();

  const [showPage, setShowPage] = useState({
    firstPage: true,
    secondPage: false,
    thirdPage: false,
  });

  const [onOffModes, setOnOffModes] = useState({
    aktion: false,
    stabil: false,
    aufgaben: false,
    menschen: false,
  });

  useEffect(() => {
    console.log(onOffModes);
    if (onOffModes.aktion && onOffModes.aufgaben) {
      setCurrentMode('modeD');
    } else if (onOffModes.aktion && onOffModes.menschen) {
      setCurrentMode('modeI');
    } else if (onOffModes.stabil && onOffModes.aufgaben) {
      setCurrentMode('modeG');
    } else if (onOffModes.stabil && onOffModes.menschen) {
      setCurrentMode('modeS');
    } else {
      setCurrentMode('standard');
    }
  }, [onOffModes]);

  const buttonHandler = (e) => {
    if (e.target.id === 'btnAktion') {
      setShowPage({ ...showPage, firstPage: false, secondPage: true });
      setOnOffModes({ ...onOffModes, aktion: true });
    } else if (e.target.id === 'btnStabil') {
      setShowPage({ ...showPage, firstPage: false, secondPage: true });
      setOnOffModes({ ...onOffModes, stabil: true });
    } else if (e.target.id === 'btnMenschen') {
      setShowPage({ firstPage: false, secondPage: false, thirdPage: true });
      setOnOffModes({ ...onOffModes, menschen: true });
    } else if (e.target.id === 'btnAufgaben') {
      setShowPage({ firstPage: false, secondPage: false, thirdPage: true });
      setOnOffModes({ ...onOffModes, aufgaben: true });
    } else if (e.target.id === 'resetSelection') {
      setShowPage({ firstPage: true, secondPage: false, thirdPage: false });
      setOnOffModes({
        aktion: false,
        stabil: false,
        aufgaben: false,
        menschen: false,
      });
    }
  };

  return (
    <div className="questionSelector container">
      <div onClick={buttonHandler}>
        {showPage.firstPage && (
          <>
            <h2>Was ist Ihnen wichtiger?</h2>
            <div className="buttonContainer">
              <button id="btnAktion">Aktion</button>
              <button id="btnStabil">Stabilität</button>
            </div>
          </>
        )}
        {showPage.secondPage && (
          <>
            <h2>Was ist Ihnen wichtiger?</h2>
            <div className="buttonContainer">
              <button id="btnMenschen">Menschen</button>
              <button id="btnAufgaben">Aufgaben</button>
            </div>
          </>
        )}
        {showPage.thirdPage && (
          <div className="messageContainer">
            <h3>Danke für Ihre Antwort!</h3>
            <p>Die Website zeigt nun Inhalte basierend auf Ihrer Auswahl an.</p>
            <button id="resetSelection">Zurücksetzen</button>
          </div>
        )}
      </div>
    </div>
  );
}
