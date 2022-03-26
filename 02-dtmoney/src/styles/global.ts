import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --red:#E52E4A;
        --blue:#5329CC;
        --green:#33cc95;
        
        --blue-light:#6933FF;
        
        --text-title:#363F5F;
        --text-body:#969CB3;
        
        --background:#f0f2f5;
        --shape:#FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // tamanho de fonte - default 16px - 1REM - ideal para desktop
    html {
        //quando o usuario estiver com uma tela até 1080px 
        @media (max-width: 1080px){
            //diminuir o font-size
            font-size: 93.75%; //16 x 0.9375 = 15px
        }
        //quando a tela for menor que 720px
        @media (max-width: 720px){
            //diminuir o font-size
            font-size: 87.5%; //14px
        }

    }

    // ====

    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`