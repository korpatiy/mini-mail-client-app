import React from 'react'
import {MessageCard} from "./MessageCard";

export const MessageItem = ({message, setIsListUpdated}) => (
    <li className="mb-3">
        <MessageCard message={message} setIsListUpdated={setIsListUpdated}/>
    </li>
)