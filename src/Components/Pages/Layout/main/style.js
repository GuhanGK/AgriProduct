import Styled from 'styled-components';

const LayoutStyle = Styled.div`
    .header_toolbar_container{
        width: 100%;
        background: green !important;
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
    }
    @media (max-width: 991px){
        .header_navbar_items{
            flex-direction: row !important;
            gap: 8px;
        }
    }
    
`;

export default LayoutStyle;