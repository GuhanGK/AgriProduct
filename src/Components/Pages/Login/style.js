import Styled from 'styled-components';
import loginLogo from "../../../Assets/Images/modern_agriculture_bg.png"

const LoginStyle = Styled.div`
    .container_wrap{
        background: url(${loginLogo});
        width: 100%;
        height:100vh;
        background-size: cover;  
        background-repeat: no-repeat;
    }
    .login_container {
        width: 100%;
        display: flex;
        height: 100vh;
        background: #00000054;
        justify-content: center;
    }
    .signup_container_data{
        width: 50%;
        margin: auto;
        padding: 1rem;
        background-color: #00000075;
        border-radius: 10px;
        box-shadow: 0px 0px 6px 3px #000000ab;
    }
    .container_data{
        width: 45%;
        margin: auto;
        padding: 3rem 2rem;
        background-color: #00000094;
        padding: 3rem 2rem;
        /* background-color: #00000075; */
        border-radius: 10px;
        box-shadow: 0px 0px 6px 3px #0000004d;
    }
    .login_title{
        color: #fff;
        font-size: 42px;
        font-weight: 600;
    }
    .login_form{
        width: 85%;
        margin: auto;
    }
    .signup_form{
        width: 95%;
        margin: auto;
    }
    .form_btn{
        width: 45%;
        height: 45px;
        background: #5dac72;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
    }
    .login_form_label{
        text-align: left;
    }
    .login_form_label label{
        color: #fff;
        font-size: 14px;
        font-weight: 600;
    }
    .login_form_input{
        height: 40px;
    }
    .signup_link{
        color: red;
        cursor:pointer;
    }
    .signup_tag{
        color:white;
        text-align:left;
    }

    .payment_form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 5px;
    }

    .register_button_section{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .signup_form_label{
        width: 48%;
    }

    .registerpassword_field{
        width: 100%;
    }
 
    @media (max-width: 991px){
        
    }
    
`;

export default LoginStyle;