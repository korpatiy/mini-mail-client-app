import React, {useState} from 'react'
import {API} from "../controllers/controllers";

export const ClapButton = ({id, clapsCount, setIsListUpdated}) => {
    const [loading, setLoading] = useState(false);

    const onClap = async () => {
        setLoading(true);
        try {
            await API.clapMessage(id);
            setIsListUpdated(true);
        } catch (e) {
        }
        setLoading(false);
    }

    return (
        <div className="d-flex">
            <form className="ms-auto" data-test="message-clap-form">
                <button className="btn" onClick={onClap} disabled={loading}>
                    👏🏻 <span data-test="clap-count">{clapsCount}</span>
                </button>
            </form>
        </div>
    )
}