import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    .header_navbar_container{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: space-between;
        background: green;
        padding: 1rem 1.5rem;
    }
    .navbar_container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0;
    }
    .navbar-nav {
        display: flex;
        flex-direction: unset;
    }
    .navbar_toggle_icon{
        border: none;
    }
    .nav_items{
        display: flex;
        justify-content: space-around;
    }
    .nav_list_container{
        width: 50%;
    }
    .responsive_nav_items{
        display: flex;
        flex-direction: column;
        position: absolute;
        background: #f4eaf6;
        height: 100vh;
        width: 60%;
        right: -24px;
        top: -16px;
        transition-property: width;
        transition: 2s;
    }
    .responsive_contact_details{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
        border-bottom: 1px solid black;
        .contact_name{
            margin-bottom: 0.2rem;
        }
        .contact_number{
             margin-bottom: 0.2rem;
        }
    }
    .contact_profile_icon{
        width: 80px;
        height: 80px;
    }

    @media (min-width: 481px) and (max-width: 767px){
        .responsive_nav_items{
            width: 50%;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .responsive_nav_items{
            width: 70%;
        }
    }
`;

export default HeaderStyle;