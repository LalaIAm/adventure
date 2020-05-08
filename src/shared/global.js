import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './styles';

export const typographyURL =
  'https://fonts.googleapis.com/css2?family=Amiko&family=Euphoria+Script&family=Neuton:ital,wght@0,400;0,700;1,400&display=swap';

export const bodyStyles = css`
  font-family: ${typography.type.body};
  font-size: ${typography.size.s};
  color: ${color.mediumJungleGreen};

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-wieght: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.body};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.primary};
    clear: both;
    margin-bottom: 1.25rem;
  }
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Amiko&family=Euphoria+Script&family=Neuton:ital,wght@0,400;0,700;1,400&display=swap');

    body {
        ${bodyStyles}

        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
    }
`;
