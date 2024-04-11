import React from "react";
import LayoutStyle from "./style";
import Header from "../../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <LayoutStyle>
                <Header />
                <Outlet />
            </LayoutStyle>
        </>
    )
}

export default Layout;