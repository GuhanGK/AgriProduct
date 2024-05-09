import Styled from 'styled-components';

const UserDetailsStyle = Styled.div`
    .userDetails_modal_body{
        padding: 12px;
    }
    .add_new_crop{
        width: 100%;
        display: flex;
        justify-content: end;
    }
    .my_add_crop_header{
        font-size: 24px;
        font-weight: bold;
    }
    .crops_header{
        font-size: 24px;
        font-weight: bold;
    }
    .sowing_input_fields{
        display: flex;
        flex-direction: column;
    }
    .profile_circle{
        width: 50px;
        height: 50px;
        background: #d2f8d2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .profile_circle_letter{
        margin-bottom: 0;
        font-size: 24px;
        font-weight: bold;
    }
    .profile_circle_container{
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;
    }
    .user_crops_details{
        text-align: left;
        text-wrap: nowrap;
    }
    .userId_name{
        text-align: left;
        font-size: 18px;
        font-weight: 600;
    }
    .span_survey_number{
        text-align: left;
        font-size: 12px;
        font-weight: 400;
    }
    .between_line{
        width: 80%;
        border-top: 1px dashed green;
    }
`;

export default UserDetailsStyle;