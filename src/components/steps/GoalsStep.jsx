import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, FormGroup, Label, ButtonGroup, Button, ErrorMessage } from '../../styles/StyledComponents';

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
      <p>This helps us personalize your dashboard and features.</p>

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