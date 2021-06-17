import React, {useState, useEffect, useRef} from 'react'
import { Form, Button, Message, Segment, TextArea, Divider} from 'react';
import {HeaderMessage, FooterMessage} from '../components/common/WelcomeMessage';
import baseUrl from '../utils/baseUrl';
import axios from "axios";

function Signup(){
    return (
        
        <>
            <HeaderMessage />

            <FooterMessage />
        </>
    )
}

export default Signup;