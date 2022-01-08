import React, {useEffect, useState} from 'react';
import {MessageCard} from "../components/MessageCard";
import {API} from "../controllers/controllers";
import {useParams} from "react-router-dom";

export const MessagePage = () => {
    const {messageId} = useParams()
    const [message, setMessage] = useState({});
    const [isCardUpdated, setIsCardUpdated] = useState(false);

    const getMessage = async (messageId) => {
        try {
            const res = await API.getMessage(parseInt(messageId));
            setMessage(res);
            setIsCardUpdated(false);
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getMessage(messageId);
    }, [messageId])

    useEffect(() => {
        if (isCardUpdated) {
            getMessage(messageId);
        }
    }, [isCardUpdated])

    return message && <MessageCard message={message} showLink={false} setIsCardUpdated={setIsCardUpdated}/>
}




