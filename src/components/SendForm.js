import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import {API} from "../controllers/controllers";

export const SendForm = ({setIsListUpdated}) => {
    const {handleSubmit, watch, setValue, reset} = useForm({defaultValues: {sender: '', message: ''}});
    const [sendLoading, setSendLoading] = useState(false);
    const [sentMessage, setSentMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = async (data) => {
        setErrorMessage('');
        setSentMessage(false);
        setSendLoading(true);
        try {
            await API.postMessage({author: data.sender, text: data.message});
            setIsListUpdated(true);
            setSentMessage(true);
            reset();
        } catch (e) {
            const result = e.response.data.map(item => (
                <div>{item.message}</div>
            ))
            setErrorMessage(result)
        }
        setSendLoading(false);
    }

    return (

        <form className="card border-secondary mb-3" data-test="send-form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend className="card-header h5 border-secondary bg-dark text-light">📩 Отправить письмо</legend>
                <div className="card-body">
                    <div className="mb-3" data-test="send-alert">
                        {sendLoading && <div className="alert alert-warning">Загрузка...</div>}
                        {sentMessage && <div className="alert alert-success">Сообщение отправлено</div>}
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sender" className="form-label">От кого:</label>
                        <input value={watch('sender')} onChange={(e) => setValue('sender', e.currentTarget.value)}
                               id="sender" name="sender" className="form-control" type="text"
                               placeholder="Имя отправителя"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Сообщение:</label>
                        <textarea value={watch('message')}
                                  onChange={(e) => setValue('message', e.currentTarget.value)}
                                  id="message" name="message" className="form-control"
                                  placeholder="Текст сообщения"/>
                    </div>
                    <div className="d-flex">
                        <button type='submit' className="btn btn-outline-success ms-auto">✏️ Отправить</button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}