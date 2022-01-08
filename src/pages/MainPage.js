import React, {useEffect, useState} from 'react';
import {SendForm} from '../components/SendForm';
import {MessageList} from "../components/MessageList";
import {API} from "../controllers/controllers";

export const MainPage = () => {
    const [messageList, setMessageList] = useState([]);
    const [isCardUpdated, setIsCardUpdated] = useState(false);

    const getMessageList = async () => {
        try {
            const list = await API.getMessages();
            setMessageList(list);
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        getMessageList();
    }, [])

    useEffect(() => {
        if (isCardUpdated) {
            getMessageList();
            setIsCardUpdated(false);
        }
    }, [isCardUpdated])

    return (
        <>
            <SendForm setIsCardUpdated={setIsCardUpdated}/>
            <MessageList messageList={messageList} setIsCardUpdated={setIsCardUpdated}/>
        </>
    )
}

