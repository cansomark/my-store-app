import styled from "styled-components";

export const ContactsSummary=styled.div `
    display: grid;
    grid-template-columns: repeat(1,auto);
    margin: 0 auto;    
    width: 50%;
    gap: 20px;
    font-size: 14px;
    font-weight: bold;    
    .data-label {
        color: #006400;
        text-align: center;
    };
    .data-label.has-error {
        color:  #FF5733 
    }
`