import styled from "styled-components";

export const NavTitleContainer=styled.div `
   display: flex;
   justify-content: center;
   align-content: center;
   align-items: baseline;
   flex-direction: row;
`

export const NavMainIcon=styled.div `
   img {
    width: 100px;
    margin-right: 10px;
   }
   @media only screen and (max-width:768px) {
      img {
         width: 85px;
      }
   }
`

export const AvatarContainer=styled.div `
   .avatar-background{
      background-image: linear-gradient(to bottom, #6087f5 0%, #abfbd7 100%);
   }
`