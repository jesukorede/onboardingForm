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

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const Step = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  animation: ${fadeIn} 0.5s ease;
  min-height: 450px;
  flex-direction: column;

  @media (max-width: 576px) {
    min-height: 350px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${props => (props.secondary ? 'white' : 'var(--primary)')};
  color: ${props => (props.secondary ? 'var(--primary)' : 'white')};
  border: ${props => (props.secondary ? '1px solid var(--primary)' : 'none')};
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => (props.secondary ? 'var(--light)' : 'var(--primary-light)')};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;

  @media (max-width: 576px) {
    gap: 0.5rem;
    padding-top: 1rem;
  }
`;
