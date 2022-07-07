import React from 'react';

import TeamCircles from '../../UtilityElements/TeamCircles';

import WhyUs from '../../UtilityElements/WhyUs';

export default function TeamStandard() {
  return (
    <div className="mt-20 my-10" style={{ minHeight: '100vh' }}>
      <h2 className="text-fc-blueDarkHeader text-center font-medium tracking-wide text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-5">
        Team
      </h2>
      <TeamCircles />
      <WhyUs />
    </div>
  );
}
