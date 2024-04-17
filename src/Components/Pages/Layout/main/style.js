import Styled from 'styled-components';

const LayoutStyle = Styled.div`
    .header_toolbar_container{
        width: 100%;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(77,195,30,1) 0%, rgba(66,197,62,1) 34%, rgba(154,229,29,1) 96%);
        // background: green !important;
    }
    .header_toolbar_items{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: space-between;
        :hover{
            background-color: unset;
        }
    }
    .header_toolbar_items:hover{
        background-color: unset;
    }
    .menu_icon_section{
        display: flex;
        align-items: center;
        gap: 10px;
        .project_header{
            margin-bottom: 0rem;
        }
    }
    .profile_wrapp{
        display: flex;
        align-items:center;
        gap: 2rem;
    }
    .profile_circle{
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #318b458c;
    }
    .sidebar_drawer .css-12i7wg6-MuiPaper-root-MuiDrawer-paper{
        width: ${props => props.mobileOpen ? "240px" : "auto"}
    }
    .main_outlet_container{
        margin-left: ${props => props.mobileOpen ? "250px" : "5rem"}
    }
    .header_menu_icon{
        cursor: pointer;
    }

    .header_navbar_items{
        flex-direction: unset !important;
        color: #fff;
    }
    .navbar_list_item{
        color: #fff !important;
    }
    @media (max-width: 991px){
        .header_navbar_items{
            flex-direction: row !important;
            gap: 8px;
        }
    }
    
`;

export default LayoutStyle;