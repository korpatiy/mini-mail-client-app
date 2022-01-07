import React from 'react'
import {MessageItem} from "./MessageItem";

export const MessageList = ({messageList, setIsListUpdated}) => {
    const renderList = messageList?.map(item => <MessageItem key={item.id} message={item} setIsListUpdated={setIsListUpdated}/>)

    return (
        <ul id="message-list" className="list-unstyled">
            {renderList}
        </ul>
    )
}