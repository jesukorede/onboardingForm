import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, FormGroup, Label, ButtonGroup, Button, ErrorMessage } from '../../styles/StyledComponents';

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CheckboxGroup = styled(RadioGroup)``;

const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  cursor: pointer;
`;

const OtherInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  margin-top: 0.5rem;
  display: ${props => props.show ? 'block' : 'none'};
`;

const AboutStep = () => {
  const { currentStep, formData, setFormData, errors, nextStep } = useOnboarding();

  const handleRoleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      role: e.target.value
    }));
  };

  const handleWorkChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      work: checked 
        ? [...prev.work, value]
        : prev.work.filter(item => item !== value)
    }));
  };

  const handleOtherWorkChange = (e) => {
    setFormData(prev => ({
      ...prev,
      workOther: e.target.value
    }));
  };

  return (
    <Step active={currentStep === 1}>
      <h2>About You</h2>
      <p>Help us tailor your library by telling us a bit about yourself.</p>

      <FormGroup>
        <Label>What best describes you?</Label>
        <RadioGroup>
          {['Freelancer', 'Solo entrepreneur', 'Small team', 'Creator'].map(role => (
            <RadioItem key={role}>
              <input
                type="radio"
                name="role"
                value={role}
                checked={formData.role === role}
                onChange={handleRoleChange}
              />
              {role}
            </RadioItem>
          ))}
        </RadioGroup>
        {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>What kind of work do you do?</Label>
        <CheckboxGroup>
          {['Design', 'Development', 'Writing', 'Marketing', 'Other'].map(work => (
            <RadioItem key={work}>
              <input
                type="checkbox"
                name="work"
                value={work}
                checked={formData.work.includes(work)}
                onChange={handleWorkChange}
              />
              {work}
            </RadioItem>
          ))}
          <OtherInput
            type="text"
            placeholder="Please specify"
            show={formData.work.includes('Other')}
            value={formData.workOther}
            onChange={handleOtherWorkChange}
          />
        </CheckboxGroup>
        {errors.work && <ErrorMessage>{errors.work}</ErrorMessage>}
      </FormGroup>

      <ButtonGroup>
        <Button onClick={nextStep}>Continue</Button>
      </ButtonGroup>
    </Step>
  );
};

export default AboutStep;