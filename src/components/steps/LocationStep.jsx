import React from 'react';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, FormGroup, Label, ButtonGroup, Button, ErrorMessage } from '../../styles/StyledComponents';

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
      <p>This helps us personalize tool suggestions, currencies, and rewards for you.</p>

      <FormGroup>
        <Label htmlFor="country">Country</Label>
        <select
          id="country"
          value={formData.country}
          onChange={handleCountryChange}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: errors.country ? '1px solid var(--danger)' : '1px solid #ddd',
            borderRadius: 'var(--border-radius)',
            fontSize: '1rem'
          }}
        >
          <option value="">Select your country</option>
          {countries.map(country => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
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