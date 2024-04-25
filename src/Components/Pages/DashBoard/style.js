import Styled from 'styled-components';

const DashboardStyle = Styled.div`
    .hello_world{
        height: 90vh;
    }
    .dashboard_container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .weather_container{
        display: flex;
        justify-content: center;
    }
    
    .carousel_box{
        width: 100%;
    }
    .carousel-image {
        width: 100%;
        height: 100%;
        margin: 0 10px;
    }
    .carousel_Img_container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        .carousel-inner {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
    .carousel_Img_item{
        width: 100%;
        height: 100%;
    }
    .carousel_Img{
        width: 100%;
        height: 100%;
    }
    
`;

export default DashboardStyle;