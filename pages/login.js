import axios from "axios";
import React from "react";
import baseUrl from '../utils/baseUrl';
import {HeaderMessage, FooterMessage} from '../components/common/WelcomeMessage.js';

function Login(){
    return (
        
        <>
            <HeaderMessage />
            <FooterMessage />
        </>
    );
}

export default Login;