import styled from "styled-components";

export const ContactsSummary=styled.div `

  @media only screen and (max-width: 768px) {
    padding: 10px 0;
  } 

    display: grid;
    grid-template-columns: repeat(1,auto);
    margin: 0 auto;    
    width: auto;
    max-width: max-content;
    gap: 20px;
    font-size: 14px;
    font-weight: bold;    
    .data-label {
        color: #006400;
        text-align: center;
        font-size: 1rem;
        line-height: 1.5rem;
    };
    .data-label.has-error {
        color:  #FF5733 
    }
    .summary-label {
        font-size: 1.158rem
    }

`