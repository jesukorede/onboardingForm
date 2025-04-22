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

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
    // In a real app, this would redirect to dashboard
    console.log('Redirecting to dashboard...');
  };

  return (
    <OnboardingProvider>
      <GlobalStyles />
      <Container>
        <ProgressBar />
        <WelcomeStep />
        <AboutStep />
        <LocationStep />
        <ToolStackStep />
        <GoalsStep />
        <CompletionStep />
      </Container>
      <CompletionPopup show={showPopup} onClose={handlePopupClose} />
    </OnboardingProvider>
  );
}

export default App;