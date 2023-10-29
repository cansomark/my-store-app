import styled from "styled-components";

export const ModalBodyContainer=styled.div  `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 660px;
background-color: #fff;
border-radius: 6px;
box-shadow: rgba(255, 255, 255, 0.3) 0px 5rem 14rem 0px, rgba(0, 0, 0, 0.6) 0px 0.8rem 2.3rem, rgba(0, 0, 0, 0.45) 0px 0.2rem 0.3rem;
padding: 16px;
.table-header {
    background: #6c7ae0;
  }
  .table-header th {
    font-weight: 600;
    color: #fff;
  }
  .table-data td {
    font-size: 0.795rem;
  }
  .table-data:nth-child(2n) {
    background-color: #f8f6ff;
  }
`