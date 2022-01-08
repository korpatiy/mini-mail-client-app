import React from 'react'
import {NavLink} from "react-router-dom";
import {ClapButton} from "./ClapButton";

export const MessageCard = ({message, setIsCardUpdated, showLink = true}) => {
    return (
        <article className="card" data-test="message">
            <div className="card-body">
                <header className="card-title d-flex">
                    <div className="text-muted" data-test="message-author">{message.author}</div>
                    {showLink &&
                    <NavLink to={`/messages/${message.id}`} className="card-link ms-auto" data-test="message-open">Открыть
                        ↗️</NavLink>}
                </header>
                <div className="card-text" data-test="message-text">
                    {message.text}
                </div>
                <ClapButton id={message.id} clapsCount={message.clap} setIsCardUpdated={setIsCardUpdated}/>
            </div>
        </article>
    )
}

