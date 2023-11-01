import styled from "styled-components";

export const FormContainer= styled.div `
  background-color: rgb(255, 255, 255);
  color: rgb(34, 51, 84);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  padding: 0px;
  box-shadow: rgba(255, 255, 255, 0.3) 0px 5rem 14rem 0px, rgba(0, 0, 0, 0.6) 0px 0.8rem 2.3rem, rgba(0, 0, 0, 0.45) 0px 0.2rem 0.3rem;
  margin: 32px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column; 
  box-sizing: border-box;
  padding: 25px;
  margin: 50px auto; 

  width: 60%;
  @media only screen and (max-width: 1020px) {
    width: 80%;
  }
`

export const FormTiTle = styled.h1 `
  font-size: clamp(16px, 1vw + 1vh, 18px);
  line-height: 1.2;
  color: #1976d2;
  @media only screen and (min-width: 1020px) {
    line-height: 1.24;
  } 
`

export const TwoRowContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-left: auto;
    margin-top: 10px;  
    margin-right: 0;
  Button {
    min-width: 115px
  }

  @media only screen and (max-width: 1020px) {
    margin: 10px auto;
    Button {
      min-width: unset;
      width: 109px;
    }
    .sx-icon-mr span {
      margin-right: 2px;
    }
  }
`

export const InstructionText = styled.span `
  color: #223354;
  font-size: clamp(12px,1vw + 1vh, 14px);
  font-weight: 400;
  line-height: 1.57;
  opacity: 0.7;
`

export const FormFieldContainer = styled.div `
  
`

export const FormFieldWrapper = styled.div `
  background: #f0f0f059;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  .MuiInputBase-root {
    background: #ffffff;
  }
`

export const FormHeader = styled.div `
  margin-bottom: 10px;
`

export const MiniBoxShadow = styled.div `
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
`

export const Flex = styled.div `
  display: flex;
`
export const THREE_COL_LAYOUT = styled.div `
  display: grid;  
  gap: 17px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    .three-col-span {
      grid-column: span 3;
    }

    .month-dropdown {
      width: 33%
    }
  }
`
export const TWO_COL_LAYOUT = styled.div `
  display: grid;
  gap: 17px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } 
`

export const TWO_NARROW_COL_LAYOUT = styled.div `
  display: grid;
  gap: 17px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  } 
`

export const FLEX_COLUMN_LAYOUT = styled.div `
  display: flex;
  flex-direction: column;
`