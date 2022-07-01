import { useStateContext } from '../../../context/StateContext';

import PortfolioStandard from './PortfolioStandard';
import PortfolioModeD from './PortfolioModeD';
import PortfolioModeI from './PortfolioModeI';
import PortfolioModeG from './PortfolioModeG';
import PortfolioModeS from './PortfolioModeS';

export default function Portfolio() {
  const { currentMode } = useStateContext();

  return (
    <div id="portfolio">
      {currentMode === 'standard' && <PortfolioStandard />}
      {currentMode === 'modeD' && <PortfolioModeD />}
      {currentMode === 'modeI' && <PortfolioModeI />}
      {currentMode === 'modeG' && <PortfolioModeG />}
      {currentMode === 'modeS' && <PortfolioModeS />}
    </div>
  );
}
