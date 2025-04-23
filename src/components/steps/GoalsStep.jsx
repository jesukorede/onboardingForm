import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, FormGroup, Label, ButtonGroup, Button, ErrorMessage } from '../../styles/StyledComponents';

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduce spacing for smaller screens */
  }

  @media (max-width: 576px) {
    gap: 0.4rem;
  }
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--light);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for readability */
    gap: 0.4rem; /* Reduce gap for smaller screens */
    padding: 0.4rem; /* Adjust padding */
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
    gap: 0.3rem;
    padding: 0.3rem;
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

const GoalsStep = () => {
  const { currentStep, formData, setFormData, errors, nextStep } = useOnboarding();

  const goals = [
    'Subscription costs',
    'Tool usage & engagement',
    'Unused/duplicate tools',
    'Personalized tool suggestions'
  ];

  const handleGoalChange = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  return (
    <Step active={currentStep === 4}>
      <h2>What Do You Want to Track or Improve?</h2>
      <ResponsiveText>
        This helps us personalize your dashboard and features.
      </ResponsiveText>

      <FormGroup>
        <Label>Select your goals</Label>
        <CheckboxGroup>
          {goals.map(goal => (
            <CheckboxItem key={goal}>
              <input
                type="checkbox"
                checked={formData.goals.includes(goal)}
                onChange={() => handleGoalChange(goal)}
              />
              {goal}
            </CheckboxItem>
          ))}
        </CheckboxGroup>
        {errors.goals && <ErrorMessage>{errors.goals}</ErrorMessage>}
      </FormGroup>

      <ButtonGroup>
        <Button onClick={nextStep}>Continue</Button>
      </ButtonGroup>
    </Step>
  );
};

export default GoalsStep;
