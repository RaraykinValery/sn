import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default DialogItem;