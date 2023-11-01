import { createGlobalStyle,css } from "styled-components";

const generateColumnStyles=(index:number)=>{
    let styles='';
    for(let i=1;i<=index;i++) {
        styles += `
            .column-hover-${i} .column-${i} {
                background-color:#bccaf4;
                color:#006400;
                font-weight:600;
            }  
        `
    }
    return css `${styles}`
}

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
        .cursor-pointer {
            cursor: pointer;
        }      
        .css-2uchni {
            margin-left: auto;
         }
         @media only screen and (max-width:768px) {
            .css-1oqqzyl-MuiContainer-root {
               padding-left: 10px;
               padding-right: 10px;
            }
         }
        ${generateColumnStyles(9)}
    }    
`