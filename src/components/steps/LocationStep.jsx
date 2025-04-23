import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, FormGroup, Label, ButtonGroup, Button, ErrorMessage } from '../../styles/StyledComponents';

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: ${props => (props.error ? '1px solid var(--danger)' : '1px solid #ddd')};
  border-radius: var(--border-radius);
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem; /* Adjust padding for tablets */
    font-size: 0.95rem; /* Slight font size adjustment */
  }

  @media (max-width: 576px) {
    padding: 0.5rem; /* Adjust padding for smaller devices */
    font-size: 0.9rem; /* Font size for small devices */
  }
`;

const ResponsiveText = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for tablets */
    line-height: 1.4; /* Adjust line height */
  }

  @media (max-width: 576px) {
    font-size: 0.85rem; /* Font size for small screens */
    line-height: 1.4; /* Line height for small screens */
  }
`;

const LocationStep = () => {
  const { currentStep, formData, setFormData, errors, nextStep } = useOnboarding();

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'IN', name: 'India' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'JP', name: 'Japan' },
    { code: 'BR', name: 'Brazil' },
    { code: 'NG', name: 'Nigeria' }
  ];

  const handleCountryChange = (e) => {
    setFormData(prev => ({
      ...prev,
      country: e.target.value
    }));
  };

  const handleSkip = () => {
    setFormData(prev => ({
      ...prev,
      country: ''
    }));
    nextStep();
  };

  return (
    <Step active={currentStep === 2}>
      <h2>Where Are You Based?</h2>
      <ResponsiveText>
        This helps us personalize tool suggestions, currencies, and rewards for you.
      </ResponsiveText>

      <FormGroup>
        <Label htmlFor="country">Country</Label>
        <StyledSelect
          id="country"
          value={formData.country}
          onChange={handleCountryChange}
          error={errors.country}
        >
          <option value="">Select your country</option>
          {countries.map(country => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </StyledSelect>
        {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
      </FormGroup>

      <ButtonGroup>
        <Button onClick={nextStep}>Continue</Button>
        <Button onClick={handleSkip} secondary>
          Skip this step
        </Button>
      </ButtonGroup>
    </Step>
  );
};

export default LocationStep;

// Note: The above code is a React component for a location step in an onboarding process. It includes a dropdown for selecting a country, error handling, and responsive design adjustments for different screen sizes. The component uses styled-components for styling and context for managing form data and errors.
// The countries list is a sample and can be expanded as needed. The skip button allows users to bypass this step if they choose.