import styled from "styled-components";

export const MonthlyTableContainer = styled.div `  
  width: 100%;
  margin-top: 5px;
  .red-button {
    background-color: #c62828
  }
  .red-text {
    color:#c62828;
  },
  .green-text {
    color:#008000;
  }
  .MuiButton-contained {
    margin-bottom: 10px;
  }
  .table-header {
    background: #6c7ae0;
  }
  .table-header th {
    font-weight: 600;
    color: #fff;
  }
  .table-header .hidden {
    color: transparent;
  }
  .table-data td {
    font-size: 0.795rem;
  }
  .table-data:nth-child(2n) {
    background-color: #f8f6ff;
  }
}
`