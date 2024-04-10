import React from "react";
import { Row, Col } from "react-bootstrap";
import LayoutStyle from "./style";

const Layout = () => {
    return (
        <>
            <LayoutStyle>
                <Row className="header_navbar_container">
                    <Col>
                        AgriTech
                    </Col>
                    <Col>
                        Sign out
                    </Col>
                </Row>
            </LayoutStyle>
        </>
    )
}

export default Layout;