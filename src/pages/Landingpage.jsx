import React from 'react';
import Home from '../components/Home';
import HomeOrganisasi from '../components/HomeOrganisasi';
import HomeRelawan from '../components/HomeRelawan';

const LandingPage = ({ pageType }) => {
  let content;

  switch (pageType) {
    case 'organisasi':
      content = <HomeOrganisasi />;
      break;
    case 'relawan':
      content = <HomeRelawan />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default LandingPage;
