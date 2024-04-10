import React, { useState, useEffect } from 'react'
import AlertNoInternet from './AlertNoInternet';
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { isOnlineContext } from "../../../App";
import NoInternetStyle from './style';

const NoInternet = () => {
    const [show, setShow] = useState(false);

    const { online } = useContext(isOnlineContext);

    useEffect(() => {
        console.log("isOnline:", online)
        online ? setShow(false) : setShow(true)
    }, [online])

    return (
        <>
            <NoInternetStyle>
                <div className='NoInternetAlert'>
                    {show ? <AlertNoInternet /> : <></>}
                </div>
                <Outlet />
            </NoInternetStyle>
        </>
    )
}


export default NoInternet;