import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  isolation: isolate;
  width: 100%;
  height: 142px;
  position: relative;
  border-radius: 275px;

  #profile__img {
    width: 88px;
    height: 88px;
    border-radius: 275px;
  }

`;

export const TextFile = styled.div`
  
  /* Text xl/Bold */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #101828;
`;

export const HiddenSlack = styled.p`
display:none;
`

export const ShareButtonStyle = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 15%;
  top: -1.2rem;
  /* Base/White */
  background: transparent;
  /* Gray/300 */
  border: 2px dotted lightgrey;
  border-radius: 100%;
  cursor: pointer;
  z-index: -2;
  #icon {
    display: none;
  }

  
  @media only screen and (max-width: 600px) {
    #share {
      display: none;
    }
    #icon {
      display: inline;
    }
  }
`
