import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

export const Step = styled.div`
  display: ${props => props.active ? 'flex' : 'none'};
  animation: ${fadeIn} 0.5s ease;
  min-height: 450px;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const ErrorMessage = styled.span`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.secondary ? 'white' : 'var(--primary)'};
  color: ${props => props.secondary ? 'var(--primary)' : 'white'};
  border: ${props => props.secondary ? '1px solid var(--primary)' : 'none'};
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.secondary ? 'var(--light)' : 'var(--primary-light)'};
    transform: translateY(-2px);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
`;