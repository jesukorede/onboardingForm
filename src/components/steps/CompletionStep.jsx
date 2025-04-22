import React from 'react';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, ButtonGroup, Button } from '../../styles/StyledComponents';

const CompletionStep = () => {
  const { currentStep, setShowPopup } = useOnboarding();

  const handleComplete = () => {
    setShowPopup(true);
  };

  return (
    <Step active={currentStep === 5}>
      <h2>Setup Complete!</h2>
      <p>Your Flowva library is ready to use. We'll take you to your dashboard now where you can start organizing your tools and tracking your productivity.</p>

      <ButtonGroup>
        <Button onClick={handleComplete}>Go to Dashboard</Button>
      </ButtonGroup>
    </Step>
  );
};

export default CompletionStep;