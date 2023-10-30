import styled from "styled-components";

export const ModalBodyContainer=styled.div  `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 60%;
min-height: 340px;
background-color: #fff;
border-radius: 6px;
box-shadow: rgba(255, 255, 255, 0.3) 0px 5rem 14rem 0px, rgba(0, 0, 0, 0.6) 0px 0.8rem 2.3rem, rgba(0, 0, 0, 0.45) 0px 0.2rem 0.3rem;
padding: 16px;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
.table-header {
    background: #6c7ae0;
  }
  .table-header th {
    font-weight: 600;
    color: #fff;
    text-align: left;
  }
  .table-data td {
    font-size: 0.795rem;
    text-align: left;
  }
  .table-data:nth-child(2n) {
    background-color: #f8f6ff;
  }
`

export const LoadingContainer=styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
  .loader-label {
    font-weight: 600;
    color: #FF3D00;
  }
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: #6c7ae0 #6c7ae0 transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent #FF3D00 #FF3D00;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
      
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`