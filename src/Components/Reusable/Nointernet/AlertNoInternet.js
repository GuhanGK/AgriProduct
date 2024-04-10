import React from 'react';
import { Alert } from 'react-bootstrap';
import NoInternetStyle from './style';

const AlertNoInternet = () => {
    return (
        <>
            <NoInternetStyle>
                <Alert variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        No Intenet Connection, Check your Connectino and try again
                    </p>
                </Alert>
            </NoInternetStyle>
        </>
    )
}

export default AlertNoInternet;