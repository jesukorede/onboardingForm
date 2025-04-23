import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #9013FE;
    --primary-light: #A29BFE;
    --secondary: #FF8687;
    --dark: #2D3436;
    --light: #F5F6FA;
    --success: #00B894;
    --warning: #FDCB6E;
    --danger: #D63031;
    --border-radius: 12px;
    --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: var(--light);
    color: var(--dark);
    line-height: 1.6;
    transition: all 0.3s ease-in-out; /* Smooth transitions for responsiveness */
  }

  /* Global Container for Responsiveness */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem; /* Ensure proper padding */
  }

  /* Default Heading Styles */
  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
  }

  /* Responsive Typography */
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 1200px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.9rem;
    }
    .container {
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.25rem;
    }
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;
