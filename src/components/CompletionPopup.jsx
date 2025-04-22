import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/StyledComponents';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
  display: ${props => props.show ? 'block' : 'none'};
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
  display: ${props => props.show ? 'block' : 'none'};
  animation: fadeIn 0.3s ease;
`;

const CompletionPopup = ({ show, onClose }) => {
  return (
    <>
      <Overlay show={show} onClick={onClose} />
      <PopupContainer show={show}>
        <h2>Onboarding Complete!</h2>
        <p>Taking you to your dashboard now.</p>
        <Button onClick={onClose}>OK</Button>
      </PopupContainer>
    </>
  );
};

export default CompletionPopup;