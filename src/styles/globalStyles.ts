import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after{
      box-sizing: border-box;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      margin: 0;
    }
    html,
    body,
    #__next {
      min-height: 100vh;
    }
    figure {
      width: 100% !important;
      margin: 0;
    }
    html,
    body,
    header,
    footer,
    main,
    #__next {
      width: 100%;
    }

    img {
      width: 100%;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }

    input:active,
    input:focus,
    input:focus-visible {
      border: none;
      outline: 0;
    }
    input ::placeholder {
      font-size: 1rem;
      line-height: 1.5;
    }

    label {
      
      font-size: 1rem;
      line-height: 1.25;
    }
    input {
      padding: 0;
      border: none;
      background: transparent;
      font-size: 1rem;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    select {
      /*ios๋์*/
      background:none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    button {
      padding: 0;
      border: none;
      background: none;
      font-size: 1rem;
      white-space: nowrap;
    }


    button,
    a {
      cursor: pointer;
      &:hover,
      &:active {
        opacity: 0.8;
      }
    }



    html,
    body {
      width: 100%;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', 'IBM Plex Sans', 'Optimus-Princeps', sans-serif;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    #__next {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    #__next > main {
      flex: 1;
    }
  `

export default GlobalStyles
