import styled from "styled-components";

export const FooterStyle = styled.div`

    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0px 0px;
    gap: 32px;
    width: 100%;
    height: 64px;
    /* Gray/200 */
    border-top: 1px solid #EAECF0;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

@media only screen and (max-width: 615px){
    border: 1px solid red;
    display: block;
    gap: unset;
    
    img{
        width: 30%;
    }
   /* flex-direction: column;
   align-items: flex-start;
   width: auto; */

}
`
export const TextStyle = styled.div`
    /* width: 832.28px;
    height: 24px; */
    /* Text md/Normal */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    text-align: center;
    /* Gray/500 */
    color: #667085;
`

export const FooterWrapper = styled.div`
    width:80%;
    margin:0 auto;
`