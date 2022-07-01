import React from 'react';
import { useStateContext } from '../../../context/StateContext';

import TeamStandard from './TeamStandard';
import TeamModeD from './TeamModeD';
import TeamModeI from './TeamModeI';
import TeamModeG from './TeamModeG';
import TeamModeS from './TeamModeS';

export default function Team() {
  const { currentMode } = useStateContext();

  return (
    <div id="team">
      {currentMode === 'standard' && <TeamStandard />}
      {currentMode === 'modeD' && <TeamModeD />}
      {currentMode === 'modeI' && <TeamModeI />}
      {currentMode === 'modeG' && <TeamModeG />}
      {currentMode === 'modeS' && <TeamModeS />}
    </div>
  );
}
