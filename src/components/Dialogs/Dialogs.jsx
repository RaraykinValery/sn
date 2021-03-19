import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Hello!"/>
                <Message message="How are you?"/>
            </div>
        </div>
    )
}

export default Dialogs;