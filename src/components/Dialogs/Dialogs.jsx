import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/state'

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} from={m.from}/>);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessageText}>
                    <textarea value={newMessageBody} 
                    ref={newMessageElement}
                    onChange={onNewMessageChange}>
                    </textarea>
                </div>
                <div className={s.commitButton}>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;