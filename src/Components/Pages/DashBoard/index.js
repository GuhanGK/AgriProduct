import React from "react";
import { Row } from "react-bootstrap";
import DashboardStyle from "./style";

const Dashboard = () => {
    return (
        <>
            <DashboardStyle>
                {/* <Row className="text-center"> */}
                <p className="hello_world">Hello World</p>
                {/* </Row> */}
            </DashboardStyle>
        </>
    )
}

export default Dashboard;