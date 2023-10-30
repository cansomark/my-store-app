import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle `
    body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        margin: 0;
        .small-icon-width{
            width:1.09rem;
        }
        .icon-text-mr {
            margin-right: 5px;
        }
        .medium-blue-text {
           color: #1976d2
        }
        .text-align-center {
            text-align: center;
        } 
        .reset-max-w {
            max-width: unset;
        }
    }    
`