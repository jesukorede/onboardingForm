import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, ButtonGroup, Button } from '../../styles/StyledComponents';

const ResponsiveStep = styled(Step)`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const ResponsiveText = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const CompletionStep = () => {
  const { currentStep, setShowPopup } = useOnboarding();

  const handleComplete = () => {
    setShowPopup(true);
  };

  return (
    <ResponsiveStep active={currentStep === 5}>
      <h2>Setup Complete!</h2>
      <ResponsiveText>
        Your Flowva library is ready to use. We'll take you to your dashboard now where you can start organizing your tools and tracking your productivity.
      </ResponsiveText>

      <ButtonGroup>
        <Button onClick={handleComplete}>Go to Dashboard</Button>
      </ButtonGroup>
    </ResponsiveStep>
  );
};

export default CompletionStep;
