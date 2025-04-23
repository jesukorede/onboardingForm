import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, ButtonGroup, Button } from '../../styles/StyledComponents';

const WelcomeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem; /* Add some padding for tablets */
  }

  @media (max-width: 576px) {
    padding: 1rem; /* Add padding for small devices */
  }
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Adjust font size for tablets */
  }

  @media (max-width: 576px) {
    font-size: 1.6rem; /* Adjust font size for mobile screens */
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly reduce font size for tablets */
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem; /* Reduce font size for smaller screens */
    line-height: 1.4;
  }
`;

const WelcomeStep = () => {
  const { currentStep, nextStep } = useOnboarding();

  return (
    <Step active={currentStep === 0}>
      <WelcomeContent>
        <Title>Welcome to Flowva</Title>
        <Description>
          Your smart library for organizing tools, tracking usage, and turning productivity into rewards. Let's set up your digital library in 2 minutes.
        </Description>
      </WelcomeContent>
      <ButtonGroup>
        <Button onClick={nextStep}>Let's Go</Button>
      </ButtonGroup>
    </Step>
  );
};

export default WelcomeStep;
