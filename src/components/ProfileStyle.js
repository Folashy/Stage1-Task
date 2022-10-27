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
    

    border-radius: 275px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;

    #profile__img {
        width: 88px;
        height: 88px;
        border-radius: 275px;
        }

`

export const TextFile = styled.div`
        width: 1152px;
        height: 30px;

        /* Text xl/Bold */

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height, or 150% */

        text-align: center;

        /* Gray/900 */

        color: #101828;
        
`
