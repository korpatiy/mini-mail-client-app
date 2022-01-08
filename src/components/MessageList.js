import React from 'react'
import {MessageItem} from "./MessageItem";

export const MessageList = ({messageList, setIsCardUpdated}) => {
    const renderList = messageList?.map(item => <MessageItem key={item.id} message={item} setIsCardUpdated={setIsCardUpdated}/>)

    return (
        <ul id="message-list" className="list-unstyled">
            {renderList}
        </ul>
    )
}