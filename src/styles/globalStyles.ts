import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      min-height: 100vh;
    }

    html,
    body,
    header,
    footer,
    main,
    #__next {
      width: 100%;
    }

    #__next {
      display: flex;
      flex-direction: column;
    }

    #__next > main {
      flex: 1;
    }
  `

export default GlobalStyles
