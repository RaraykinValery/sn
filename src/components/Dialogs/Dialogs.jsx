import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messagesPage.messages
        .map(m => <Message message={m.message} from={m.from}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;