import React from 'react';
import styled from 'styled-components';
import { useOnboarding } from '../../context/OnboardingContext';
import { Step, ButtonGroup, Button } from '../../styles/StyledComponents';

const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust for tablets */
    gap: 0.75rem; /* Reduce spacing */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* Single column for smaller devices */
    gap: 0.5rem; /* Further reduce spacing */
  }
`;

const ToolItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => (props.selected ? 'var(--primary-light)' : 'white')};
  border-color: ${props => (props.selected ? 'var(--primary)' : '#ddd')};

  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 0.75rem; /* Adjust padding for small devices */
  }
`;

const Icon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 576px) {
    font-size: 1.5rem; /* Scale icon size for smaller devices */
  }
`;

const Note = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem; /* Adjust font size for tablets */
  }

  @media (max-width: 576px) {
    font-size: 0.8rem; /* Further adjustment for small screens */
  }
`;

const ToolStackStep = () => {
  const { currentStep, formData, setFormData, nextStep } = useOnboarding();

  const tools = [
    { id: 'notion', name: 'Notion', icon: '📝' },
    { id: 'trello', name: 'Trello', icon: '📋' },
    { id: 'slack', name: 'Slack', icon: '💬' },
    { id: 'clickup', name: 'ClickUp', icon: '✅' },
    { id: 'canva', name: 'Canva', icon: '🎨' },
    { id: 'zapier', name: 'Zapier', icon: '⚡' },
    { id: 'stripe', name: 'Stripe', icon: '💳' },
    { id: 'figma', name: 'Figma', icon: '✏️' },
    { id: 'calendly', name: 'Calendly', icon: '📅' }
  ];

  const toggleTool = (toolId) => {
    setFormData(prev => ({
      ...prev,
      selectedTools: prev.selectedTools.includes(toolId)
        ? prev.selectedTools.filter(id => id !== toolId)
        : [...prev.selectedTools, toolId]
    }));
  };

  const handleSkip = () => {
    setFormData(prev => ({
      ...prev,
      selectedTools: []
    }));
    nextStep();
  };

  return (
    <Step active={currentStep === 3}>
      <h2>Your Tool Stack</h2>
      <p>Which tools are part of your workflow? We'll pre-load and organize them in your library.</p>

      <ToolGrid>
        {tools.map(tool => (
          <ToolItem
            key={tool.id}
            selected={formData.selectedTools.includes(tool.id)}
            onClick={() => toggleTool(tool.id)}
          >
            <Icon>{tool.icon}</Icon>
            <span>{tool.name}</span>
          </ToolItem>
        ))}
      </ToolGrid>

      <Note>You can always add more tools later in your library settings.</Note>

      <ButtonGroup>
        <Button onClick={nextStep}>Continue</Button>
        <Button onClick={handleSkip} secondary>
          Skip – I'll add them later
        </Button>
      </ButtonGroup>
    </Step>
  );
};

export default ToolStackStep;
