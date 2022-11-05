import styled from "styled-components";



export const OverallContainerStyle = styled.div`
height: auto;
width: 100vw;

.formContainer{
    margin-left: auto;
    margin-right: auto;
    width:100%;
    /* height: 86%; */
    height: 84%;
    padding: 64px 0px 96px;
}

.contactForm{
    border: 1px solid green;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    /* height: 77%; */
    height: 616px;
}

.header {
    height: 94px;
    padding-bottom: 0;
    width: 100%;
}
 
 .FormStyle{
    height: 474px;
    margin-top: 48px;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
 }

 .header >h1 {
    margin-bottom: 20px;
    height: 44px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -0.02em;
    color: #101828;
 }

 .header >p {
    height: 30px;
    font-weight: 400;
    font-size: 20px;
    color: #475467;

 }

 .formEmail > input, .firstname > input, .lastname > input{
    height: 44px;
    width: 100%;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1rem;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

 }
 .title {
    margin-bottom: 6px;
 }
 .checkInput{
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
 }
 .checkInput > input {
    /* box-sizing: border-box; */
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #D0D5DD;
    border-radius: px;
 }

.formEmail, .firstname, .lastname, label{
    height: 70px;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
}

#email, #message{
    margin-top: 6px;
}

input[type='checkbox']{
    border-radius: 6px;
}

.fullName{
    display: flex;
    gap: 50px;
}

.firstname{
    width: 50%
    
}

.lastname{
    width: 50%
}

textarea{
    width: 100%;
    height: 132px;
    margin-bottom: 15px;
    padding-left: 14px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 14px;
    background: #FFFFFF;    
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

}
label{
    margin-bottom: 15px;
    padding: 0px;
}

button{
    height: 48px;
    width: 100%;
    left: 0px;
    top: 426px;
    border-radius: 8px;
    padding: 12px 20px 12px 20px;
    border: 1px solid #1570EF;
    background: #1570EF;
    color: white;
    margin-top: 32px;
}

    @media screen and (max-width: 800px){

        .fullName{
            display: block;
            gap: unset;
        }

        .firstname, .lastname{
            width: 100%;
        }

        .header p{
            line-height: 23px;
            margin-bottom: 18px;
        }
    } 

    @media screen and (max-width: 615px){

        .contactForm{
            border: 1px solid red;
        }

        .header p{
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 15px;
        }
    } 
`



// export const MainContainerStyle = styled.div`
// padding: 64px 0px 96px;
// height: 84%;

// `

// export const contactForm = styled.div`
// margin-left: auto;
// margin-right: auto;

// `

// // export const HeadingStyle = styled.div`
// // padding: 0px;
// // gap: 20px;
// // width: 100%;
// // height: 94px;
// // margin-left: auto;
// // margin-right: auto;



// // `

// // export const ParaStyle = styled.p`
// // width: 100%;
// // height: 30px;
// // font-style: normal;
// // font-weight: 400;
// // font-size: 20px;
// // line-height: 30px;
// // color: #475467;
// // margin-left: auto;
// // margin-right: auto;

// // `

// export const ContactStyle = styled.h1`
// width:100%;
// height: 44px;
// /* Display md/Semibold */
// font-style: normal;
// font-weight: 600;
// font-size: 36px;
// line-height: 44px;
// /* identical to box height, or 122% */
// letter-spacing: -0.02em;
// /* Gray/900 */
// color: #101828;
// `
// export const FullNameStyle = styled.div`
// padding: 0px;
// gap: 24px;
// width: 100%;
// height: 70px;
// background: #FFFFFF;
// `

// export const NameStyle = styled.label`
// width: 71px;
// height: 20px;
// /* Text sm/Medium */
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 20px;
// box-sizing: border-box;
// border-radius: 8px;
// /* identical to box height, or 143% */
// /* Gray/700 */
// color: #344054;
// `
// export const FormStyle = styled.div`
// padding: 0px;
// gap: 24px;
// width: 100%;
// height: 394px;


// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
// `

// export const ButtonStyle = styled.button`

// padding: 12px 20px;
// gap: 8px;
// width: 720px;
// height: 48px;
// /* Primary/600 */
// background: #1570EF;
// /* Primary/600 */
// border: 1px solid #1570EF;
// /* Shadow/xs */
// box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
// border-radius: 8px;
// `

// export const ButtonTextStyle = styled.div`
// width: 114px;
// height: 24px;
// /* Text md/Semibold */
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 24px;
// /* identical to box height, or 150% */
// /* Base/White */
// color: #FFFFFF;
// `