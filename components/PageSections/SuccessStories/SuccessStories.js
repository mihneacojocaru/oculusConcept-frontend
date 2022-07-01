import React from 'react';
import { useStateContext } from '../../../context/StateContext';

import SuccesStandard from './SuccessStandard';
import SuccessModeD from './SuccessModeD';
import SuccessModeI from './SuccessModeI';
import SuccessModeG from './SuccessModeG';
import SuccessModeS from './SuccessModeS';

export default function SuccesStories() {
  const { currentMode } = useStateContext();

  return (
    <div id="success">
      {currentMode === 'standard' && <SuccesStandard />}
      {currentMode === 'modeD' && <SuccessModeD />}
      {currentMode === 'modeI' && <SuccessModeI />}
      {currentMode === 'modeG' && <SuccessModeG />}
      {currentMode === 'modeS' && <SuccessModeS />}
    </div>
  );
}
