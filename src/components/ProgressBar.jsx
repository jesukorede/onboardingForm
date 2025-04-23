import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../context/OnboardingContext';

const ProgressBarContainer = styled.div`
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 5px; /* Adjust height for tablets */
    margin-bottom: 1.5rem; /* Adjust margin */
  }

  @media (max-width: 576px) {
    height: 4px; /* Further adjust height for small devices */
    margin-bottom: 1rem; /* Reduce margin for compact screens */
  }
`;

const Progress = styled.div`
  height: 100%;
  background-color: var(--primary);
  transition: width 0.3s ease;
  width: ${props => props.progress}%;

  @media (max-width: 768px) {
    transition: width 0.2s ease; /* Slightly faster transition for smaller screens */
  }
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
