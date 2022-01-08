import React from 'react'
import {MessageCard} from "./MessageCard";

export const MessageItem = ({message, setIsCardUpdated}) => (
    <li className="mb-3">
        <MessageCard message={message} setIsCardUpdated={setIsCardUpdated}/>
    </li>
)