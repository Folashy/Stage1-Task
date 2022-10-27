import styled from "styled-components";

export const LinkTreeStyle = styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    gap: 8px;
    font-weight: 600;
    width: 100%;
    height: 76px;
    background: #EAECF0;
    border: 1px solid #EAECF0;
    border-radius: 8px;
`

export const CursorStyling = styled.div`
p:hover{
    background: #d0d5dd;
    color: #101828;
    border-radius: 16px;
}

a:link{
    text-decoration: none;
    color: #101828;
}

a:visited{
    text-decoration: none;
    color: #101828;  
}

a:hover{
    text-decoration: none;
    color: #101828;
}

a:active{
    background: #d0d5dd;
    color: #101828;
}
`