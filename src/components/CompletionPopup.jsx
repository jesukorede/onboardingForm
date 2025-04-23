import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/StyledComponents';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  z-index: 1000;
  text-align: center;
  display: ${props => (props.show ? 'block' : 'none')};
  animation: fadeIn 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding for tablets */
    width: 90%; /* Adjust width for medium screens */
  }

  @media (max-width: 576px) {
    padding: 1rem; /* Adjust padding for small screens */
    width: 95%; /* Further adjust width for small screens */
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem; /* Adjust font size for tablets */
  }

  @media (max-width: 576px) {
    font-size: 1.2rem; /* Smaller font for mobile devices */
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust text size for tablets */
    line-height: 1.4;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem; /* Smaller font for mobile devices */
    line-height: 1.4;
  }
`;

const CompletionPopup = ({ show, onClose }) => {
  return (
    <>
      <Overlay show={show} onClick={onClose} />
      <PopupContainer show={show}>
        <Title>Onboarding Complete!</Title>
        <Description>Taking you to your dashboard now.</Description>
        <Button onClick={onClose}>OK</Button>
      </PopupContainer>
    </>
  );
};

export default CompletionPopup;
