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
  max-width: 60%;
  box-sizing: border-box;
  padding: 25px;
  margin: 0 auto;
  margin-top: 50px;  
`

export const FormTiTle = styled.h1 `
  font-size: 18px;
  line-height: 0.24;
  color: #1976d2;
`

export const TwoRowContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-left: auto;
  margin-top: 10px;
  Button {
    min-width: 115px
  }
`

export const InstructionText = styled.span `
  color: #223354;
  font-size: 14px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  .three-col-span {
    grid-column: span 3;
  }

  .month-dropdown {
    width: 33%
  }
`
export const TWO_COL_LAYOUT = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

export const TWO_NARROW_COL_LAYOUT = styled.div `
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`

export const FLEX_COLUMN_LAYOUT = styled.div `
  display: flex;
  flex-direction: column;
`

export const SMALL_WIDTH = styled