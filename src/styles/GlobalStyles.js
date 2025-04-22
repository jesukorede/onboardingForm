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
  }
`;