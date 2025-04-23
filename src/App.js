import React, { useState } from 'react';
import { OnboardingProvider } from './context/OnboardingContext';
import { GlobalStyles } from './styles/GlobalStyles';
import ProgressBar from './components/ProgressBar';
import WelcomeStep from './components/steps/WelcomeStep';
import AboutStep from './components/steps/AboutStep';
import LocationStep from './components/steps/LocationStep';
import ToolStackStep from './components/steps/ToolStackStep';
import GoalsStep from './components/steps/GoalsStep';
import CompletionStep from './components/steps/CompletionStep';
import CompletionPopup from './components/CompletionPopup';
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding for tablets */
    margin: 1.5rem auto; /* Reduce margin for medium screens */
  }

  @media (max-width: 576px) {
    padding: 1rem; /* Compact padding for mobile screens */
    margin: 1rem auto; /* Reduce margin for small screens */
  }
`;

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
    console.log('Redirecting to dashboard...');
  };

  return (
    <OnboardingProvider>
      <GlobalStyles />
      <ResponsiveContainer>
        <ProgressBar />
        <WelcomeStep />
        <AboutStep />
        <LocationStep />
        <ToolStackStep />
        <GoalsStep />
        <CompletionStep />
      </ResponsiveContainer>
      <CompletionPopup show={showPopup} onClose={handlePopupClose} />
    </OnboardingProvider>
  );
}

export default App;
