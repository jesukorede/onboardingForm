import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, ButtonGroup, Button } from '../../styles/StyledComponents';

const WelcomeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const WelcomeStep = () => {
  const { currentStep, nextStep } = useOnboarding();

  return (
    <Step active={currentStep === 0}>
      <WelcomeContent>
        <Title>Welcome to Flowva</Title>
        <p>Your smart library for organizing tools, tracking usage, and turning productivity into rewards. Let's set up your digital library in 2 minutes.</p>
      </WelcomeContent>
      <ButtonGroup>
        <Button onClick={nextStep}>Let's Go</Button>
      </ButtonGroup>
    </Step>
  );
};

export default WelcomeStep;