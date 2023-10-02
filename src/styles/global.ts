import { createGlobalStyle } from 'styled-components';
import { Font, Weight, Color, Screen } from './constants';
import { wysiwygStyles } from './wysiwyg';
import { rem } from './helpers';

export const GlobalStyle = createGlobalStyle`
  :root {
    --container-width: 1440px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${Color.pinkLight};
    color: ${Color.greenDark};
    font-family: ${Font.roboto};
    font-size: 16px;
    font-weight: ${Weight.regular};
    line-height: 1.5;


    &.mobile-open {
      overflow: hidden;
    }

    * {
      &::selection {
        /* WebKit/Blink Browsers */
        background: ${Color.green};
        background-color: ${Color.green};
        color: ${Color.white};
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .125em;
    line-height: 1;
    font-family: ${Font.fries};
    text-transform: uppercase;
  }

  h1, .h1 {
    font-size: ${rem(36)};

    @media ${Screen.portrait} {
      font-size: ${rem(28)};
    }
  }

  img { max-width: 100% }

  figure { margin: 0 }

  form { position: relative }

  a {
    color: inherit;
    transition: color .24s;
  }

  button, a {
    &:focus-visible {
      outline: 2px solid ${Color.orangeDark};
      outline-offset: 2px;
    }

    &:not(:disabled) { cursor: pointer }

    &:disabled {
      pointer-events: none;
    }
  }

  input, button, a, textarea {
    outline: none;
  }

  input, textarea {
    &:focus-visible {
      border-bottom-color: ${Color.orangeDark};
    }
  }

  svg {
    display: block;
  }

  iframe {
    border: 0;
  }

  .wysiwyg {
    ${wysiwygStyles}
  }

  .roboto {
    font-family: ${Font.roboto};
  }
`;
