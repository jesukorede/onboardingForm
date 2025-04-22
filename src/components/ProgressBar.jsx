import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../context/OnboardingContext';

const ProgressBarContainer = styled.div`
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: var(--primary);
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

const ProgressBar = () => {
  const { currentStep } = useOnboarding();
  const progress = (currentStep / 5) * 100;

  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;