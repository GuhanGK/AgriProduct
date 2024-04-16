import Styled from 'styled-components';

const WeatherStyle = Styled.div`
    .cloud_img{
        width: 200px;
        height: 200px;
        fill: #FFF;
    }

    .weather_header_container{
        width: 100%;
        padding: 8px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(77,195,30,1) 0%, rgba(66,197,62,1) 13%, rgba(0,212,255,1) 96%);
        // background: transparent linear-gradient(180deg, #F4E8FA 0%, #00C0F9 100%) 0% 0% no-repeat padding-box;
        border-radius: 8px;
    }
    .weather_header{
        width: 100%;
        // background: transparent linear-gradient(180deg, #F4E8FA 0%, #00C0F9 100%) 0% 0% no-repeat padding-box;
        display: flex;
        justify-content: space-between;
    }
    .weather_deatils_box{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8px 24px;
        color: #fff;
        // background: transparent linear-gradient(180deg, #F4E8FA 0%, #00C0F9 100%) 0% 0% no-repeat padding-box;
    }
    .weather_temp_value{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;    
        font-size: 42px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 0rem;
        .current_date_time{
            font-size: 26px;
            font-weight: 500;
        }
    }
    .weather_place_title{
        font-size: 42px;
        font-weight: 600;
        color: #fff;
    }
    .weather_deatils_data{
        display: flex;
        justify-content: space-between;
    }
`;

export default WeatherStyle;